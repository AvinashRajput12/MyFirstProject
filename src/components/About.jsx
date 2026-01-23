import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={{}}>About Me:</h1>

      <p style={{marginLeft:"70px", width:"60%"}}>
       “My name is <strong>Avinash Chauhan</strong>. I am 20 years old and I am from <strong>Azamgarh</strong>. Currently, I am pursuing my graduation. I am a web developer with strong knowledge of front-end and back-end technologies. I have hands-on experience with React.js, JavaScript, HTML, CSS, Node.js, and Python. I enjoy building user-friendly web applications and continuously improving my technical skills. I am a quick learner, dedicated, and always eager to work on new challenges that help me grow as a developer.”
      </p>

      <p style={{marginLeft:"70px", width:"60%"}}>
        Mujhe JavaScript, React.js, HTML, CSS aur APIs ke saath 
        kaam karna achha lagta hai. Main hamesha naye tools aur 
        technologies seekhne ki koshish karta hoon.
      </p>

      <p style={{marginLeft:"70px", width:"60%"}}>
        Free time me mujhe coding practice, problem solving 
        aur tech blogs padhna pasand hai.
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "auto",
    padding: "40px",
    fontFamily: "Arial",
  }
};

export default About;
