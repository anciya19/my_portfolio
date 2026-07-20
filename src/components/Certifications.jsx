import React from "react";
import "../styles/Certification.css";
import genai_image from "../assets/genai_image.png"
import pythonCertificate from "../assets/python_certificate.jpeg";


const Certifications = () => {

  const certifications = [

    {
      title: "Python Programming Certification",
      duration: "University of Toronto",
      image: pythonCertificate,
      description:
        "Completed Python programming certification with hands-on experience in Python programming, object-oriented programming, file handling, database connectivity, and application development.",
      skills: [
        "Python",
        "OOP",
        "File Handling",
        "SQL",
        "API Development",
      ],
    },


    {
      title: "Generative AI Full Stack Developer",
      duration: "Karka Software Academy",
      image: genai_image,
      description:
        "Currently pursuing Generative AI Full Stack Developer course covering AI concepts, LLMs, AI applications, and full stack integration.",
      skills: [
        "Generative AI",
        "LLM",
        "Machine Learning",
        "FastAPI",
        "React",
      ],
    },

  ];



  return (

    <section 
      className="certification-section" 
      id="certifications"
    >

      <div className="certification-container">


        <h1 className="certification-title">
          MY CERTIFICATIONS
        </h1>


        <p className="certification-subtitle">
          Certifications and courses that helped me improve my technical skills and professional knowledge.
        </p>



        {
          certifications.map((certificate,index)=>(

            <div
              key={index}
              className={`certificate-card ${
                index % 2 === 0 
                ? "left-layout" 
                : "right-layout"
              }`}
            >


              <div className="certificate-image">


                {
                  certificate.image ?


                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-img"
                  />


                  :


                  <div className="certificate-placeholder">

                    <h2>
                      {certificate.title}
                    </h2>

                  </div>

                }


              </div>




              <div className="certificate-content">


                <span className="certificate-date">
                  {certificate.duration}
                </span>


                <h2>
                  {certificate.title}
                </h2>


                <p>
                  {certificate.description}
                </p>



                <div className="skill-stack">

                  {
                    certificate.skills.map((skill,i)=>(

                      <span 
                        key={i}
                        className="skill-badge"
                      >
                        {skill}
                      </span>

                    ))
                  }

                </div>


              </div>


            </div>

          ))
        }


      </div>
      
    </section>

  );

};


export default Certifications;