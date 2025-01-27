// src/App.js
import { useEffect } from "react";
import { auth } from "./firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Editor from "./components/text-editor";

function App() {

  const handleCopyClick = () => {
    const projectLink = "https://google.com"; // Replace with your deployed URL

    // Use the Clipboard API to copy the link to the clipboard
    navigator.clipboard.writeText(projectLink).then(
      () => {
        alert("Link copied to clipboard!"); // Optional: Display a success message
      },
      (error) => {
        console.error("Failed to copy text: ", error);
        alert("Failed to copy the link."); // Optional: Handle failure
      }
    );
  };

  useEffect(() => {
    const signIn = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Error signing in anonymously: ", error.message);
      }
    };
  
    signIn();
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user.uid);
      }
    });
  
    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);
  
  
  return (
    <div className="App">
      <header>
        <h1>LiveWrite</h1>
        <div className="link-button">
        <h3 className="sub-heading"> Real-Time Collaborative Document Editing </h3>
        <button className="share" onClick={handleCopyClick}>Share Link</button>
        </div>
        <h3 className="sub-heading">Just share the document Link and start collaborating instantly!</h3>
        <h3 className="sub-heading start-editing">Start Editing...</h3>
      </header>
      <Editor />
    </div>
  );
}

export default App;
