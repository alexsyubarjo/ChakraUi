import axios from 'axios';

export const sendEmail = async (values: any, { setSubmitting, resetForm }: any) => {
  try {
    
    const response = await axios.post(`https://formspree.io/f/xzzprkne`, values);
    if (response.status === 200) {
      alert("Message sent successfully!");
      resetForm(); // Reset form setelah berhasil mengirim
    } else {
      alert(`Failed to send message: ${response.statusText}`);
    }

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Jika error berasal dari Axios
      console.error("Axios error:", error.message);
      alert(`An error occurred while sending the message: ${error.message}`);
    } else {
      // Jika error berasal dari sumber 
      

      console.error("Unknown error:", error);
      alert("An unknown error occurred while sending the message.");
    }


  } finally {
    setSubmitting(false);
  }
};
