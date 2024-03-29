"use client";
import * as styles from "./styles";

export default function Form() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("Something went wrong");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);
      alert("Thank you for your message");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputDiv}>
        <label htmlFor="form-name">Name:</label>
        <input
          id="form-name"
          autoComplete="name"
          maxLength={50}
          size={12}
          name="name"
          className={styles.input}
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="form-email">Email:</label>
        <input
          id="form-email"
          required
          autoComplete="email"
          maxLength={80}
          name="email"
          type="email"
          className={styles.input}
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="form-message">Message:</label>
        <textarea
          id="form-message"
          required
          name="message"
          rows={5}
          className={styles.inputMessage}
        />
      </div>
      <button className={styles.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
}
