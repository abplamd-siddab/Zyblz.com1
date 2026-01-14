import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification } from "./gmail";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      try {
        await sendContactNotification(validatedData);
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: submission,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message,
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form",
        });
      }
    }
  });

  app.get("/api/contact-submissions", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({
        success: true,
        data: submissions,
      });
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch submissions",
      });
    }
  });

  return httpServer;
}
