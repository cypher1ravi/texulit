import React from "react"


export default function About() {

    return (
        <>
            <div className=" mt-5 container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000" alt="Your Name" className="img-fluid rounded-circle " />
                    </div>
                    <div className="col-md-6">
                        <h1 className="mb-4">About Me</h1>
                        <p className="about-text">Welcome to TextUtils! I'm passionate about creating useful tools for text manipulation and analysis. With TextUtils, you can perform various text-related tasks efficiently.</p>
                        <p className="about-text">Whether you need to format your text, count words, or extract specific information, TextUtils has got you covered. Our user-friendly interface and powerful features make text processing a breeze.</p>
                        <p className="about-text">Feel free to explore the different tools available on the website and make the most out of your text data. If you have any questions or suggestions, don't hesitate to get in touch with me.</p>

                    </div>
                </div>

            </div>
        </>
    )
}
