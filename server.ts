import app from './src/app.ts';
import config from './src/config/env.ts';
const { connectDB } = await import('./src/config/db.ts');

const PORT = config.port;

async function startServer() {
  try {
   
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to start server:', error.message);
    } else {
      console.error('Failed to start server:', error);
    }
    process.exit(1);
  }
}

startServer();
