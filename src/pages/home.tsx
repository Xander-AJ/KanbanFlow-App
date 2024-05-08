import React, { useState } from "react";

const Home: React.FC = () => {
  // State for user name
  const [userName, setUserName] = useState<string>(() => {
    // Retrieve username from localStorage if it exists
    const storedName = localStorage.getItem("userName");
    return storedName ? storedName : "";
  });

  // State for user image
  const [userImage, setUserImage] = useState<string>(() => {
    // Retrieve user image from localStorage if it exists
    const storedImage = localStorage.getItem("userImage");
    return storedImage ? storedImage : "src/images/default_user.png"; // default image path
  });

  // Function to handle name change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setUserName(newName);
    // Save the new name to localStorage
    localStorage.setItem("userName", newName);
  };

  // Function to handle image change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setUserImage(imageDataUrl);
        // Save the image data URL to localStorage
        localStorage.setItem("userImage", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Welcome to Our Website, {userName || "Guest"}!</h1>
      {/* Input field for changing user name */}
      <input
        type="text"
        value={userName}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      {/* Input field for uploading user image */}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {/* Display user image */}
      <img src={userImage} alt="User" width="200" />
    </div>
  );
};

export default Home;
