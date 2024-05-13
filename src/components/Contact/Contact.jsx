import './Contact.css'
import { validateEmail } from '../../utils/EmailValidater.js'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Please Enter A Valid Email');
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your message ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <main id='contact' className='flex flex-col items-center text-[whitesmoke]'>
            <header className='contact-header py-2 md:py-5 w-full text-center'><span className='text-[2rem]'>C</span><span className='text-3xl'>ONTAC</span><span className='text-[2rem]'>T</span></header>
            <article className='email-form-container flex flex-col items-center w-full'>
                <form onSubmit={handleSubmit} className='text-[#f5f5f5] flex flex-col content-center w-[80%] lg:w-[50%] my-10'>
                    <article className='contact-form flex flex-col rounded-xl'>
                        <input
                            className='user-name outline-none h-10 px-2 my-1 text-xl bg-transparent rounded-xl'
                            type='text'
                            placeholder='Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className='user-email outline-none h-10 px-2 my-1 text-xl bg-transparent rounded-xl'
                            type='email'
                            placeholder='Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='user-subject outline-none h-10 px-2 my-1 text-xl bg-transparent rounded-xl'
                            type='subject'
                            placeholder='Subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea
                            className='user-message outline-none px-2 py-2 my-1 text-xl bg-transparent rounded-xl'
                            cols='30'
                            rows='5'
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                        </textarea>
                    </article>
                    <button className='post-button w-fit p-3 mt-1 rounded-xl'>Submit</button>
                </form>
                <a href='/#top' className='contact-top-link flex justify-center py-2 w-full text-xl'>To the Top</a>
            </article>
        </main>
    )
}

export default Contact