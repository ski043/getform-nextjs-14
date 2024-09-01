"use server";

const formProblemUrl = "https://getform.io/f/axojnnlb";

export async function submitForm(formData: FormData) {
  try {
    const response = await fetch(formProblemUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("response ok");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
