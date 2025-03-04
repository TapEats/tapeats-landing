import emailjs from '@emailjs/browser';

// Get environment variables
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS with your user ID (this should be done once, typically in your _app.tsx)
export const initEmailJS = () => {
  if (!EMAILJS_USER_ID) {
    console.warn('EmailJS User ID is not defined in environment variables');
    return;
  }
  
  emailjs.init(EMAILJS_USER_ID);
};

// Function to send email using EmailJS
export const sendEmail = async (templateParams: Record<string, unknown>) => {
  // Validate environment variables
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    console.error('EmailJS Service ID or Template ID is not defined in environment variables');
    return { 
      success: false, 
      error: 'Email service configuration is incomplete.' 
    };
  }
  
  try {
    // Send email with environment variables
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      templateParams
    );
    
    return { success: true, response };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { 
      success: false, 
      error: typeof error === 'string' ? error : 'An unexpected error occurred.' 
    };
  }
};