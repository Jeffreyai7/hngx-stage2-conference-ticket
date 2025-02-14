const AboutProject = () => {
  return (
    <section className="w-[90%] max-w-[700px] flex flex-col gap-3 h-full mx-auto bg-(--primaryColor) py-3 text-white">
      <p>Event Ticket Booking UI – Open Source Practice Project 🎟️</p>
      <p>Overview</p>
      <p>
        This is a beginner-friendly yet practical Event Ticket Booking UI
        designed for developers to clone, explore, and build upon. The design
        focuses on a seamless, login-free ticket reservation flow, allowing
        users to book event tickets quickly and efficiently.
      </p>
      <p>
        The project consists of a three-step ticket booking flow, and developers
        can extend it further by integrating payment solutions, user
        authentication (optional), and ticket validation systems.
      </p>
      <p>Flow & Features</p>
      <p>
        1️⃣ Ticket Selection Users can browse available tickets (Free & Paid).
        Ticket options are displayed in a list or card view. For Free Tickets →
        Clicking “Get Free Ticket” proceeds to attendee details. For Paid
        Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.
      </p>
      <p>
        2️⃣ Attendee Details Form Users input their Name, Email, and optional
        Phone Number. Profile picture upload option with preview functionality.
        Ticket summary is visible to ensure users review their details
      </p>

      <p>
        3️⃣ Payment or Success Page If the ticket is free, the user is taken
        directly to the Ticket Confirmation Page. If the ticket is paid,
        developers can integrate Stripe, Paystack, or Flutterwave to process
        payments before showing the confirmation page. Upon successful booking,
        users should receive: A visual ticket preview with a unique QR Code. An
        option to download the ticket as PDF or save it to their device. An
        email confirmation containing ticket details.
      </p>
    </section>
  );
};

export default AboutProject;
