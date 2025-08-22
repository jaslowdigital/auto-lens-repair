import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // OpenGraph meta tag injection API
  app.get('/api/og-meta', (req, res) => {
    const protocol = req.get('X-Forwarded-Proto') || req.protocol;
    const host = req.get('Host');
    const baseUrl = `${protocol}://${host}`;
    
    const ogMeta = {
      title: "Auto Lens Repair - Professional Headlight Restoration PA",
      description: "Professional headlight restoration services in Montgomery County, Bucks County, and Philadelphia PA. Mobile service available. 1-year warranty. Call 445-200-7542",
      image: `${baseUrl}/attached_assets/og-image.png`,
      url: `${baseUrl}${req.query.path || ''}`,
      type: "website",
      siteName: "Auto Lens Repair"
    };
    
    res.json(ogMeta);
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
