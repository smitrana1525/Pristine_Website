export interface ContactRequest {
  strFirstName: string;
  strLastName: string;
  strEmail: string;
  strPhone?: string;
  strSubject: string;
  strMessage: string;
}

export async function submitContact(request: ContactRequest): Promise<void> {
  const response = await fetch("http://localhost:5270/api/Contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Failed to send message. Please try again later.");
  }
}


