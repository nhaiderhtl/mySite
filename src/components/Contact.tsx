import React from 'react';
import {Mail} from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="container mx-auto py-16 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
                Got a cool project idea or just want to chat about tech? Feel free to reach out – I'm always up for interesting conversations!
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
                <Mail size={22} className="text-primary" style={{flexShrink: 0}}/>
                <span className="text-lg">nicohaider2008@gmail.com</span>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="mailto:nicohaider2008@gmail.com" className="btn">
                    Send me an email
                </a>
                <a href="https://www.linkedin.com/in/nico-haider-976a96393/" target="_blank" rel="noopener noreferrer"
                   className="btn">
                    Connect on LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contact;
