import './Testimonials.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

const Testimonials = () => {
    const [input, setInput] = useState({
        userfirstname: '',
        userlastname: '',
        comment: '',
    })

    const [comments, setComments] = useState([{
        userfirstname: '',
        userlastname: '',
        comment: ''
    }])

    function validateComment() {
        if (!input.userfirstname || !input.userlastname || !input.comment) {
            alert('You must enter your first name, last name, and experience to submit.')
        }
    }

    useEffect(() => {
        fetch(`${apiBaseUrl}/comments`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes))

    }, [])

    function handleChange(e) {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');
        validateComment();
        const newComment = {
            userfirstname: input.userfirstname,
            userlastname: input.userlastname,
            comment: input.comment
        }
        if (input.userfirstname && input.userlastname && input.comment) {
            alert(`Thank you ${input.userfirstname} ${input.userlastname} for your comment!`);
            axios.post(`${apiBaseUrl}/create`, newComment).then(result => {
                location.reload()
            }).catch(error => {
                console.error(error);
            });
        }
    }



    return (
        <main id='testimonials' className='flex flex-col items-center text-[whitesmoke]'>
            <header className='testimonials-header py-2 md:py-5 w-full text-center'><span className='text-[2rem]'>T</span><span className='text-3xl'>ESTIMONIAL</span><span className='text-[2rem]'>S</span></header>
            <form onSubmit={handleSubmit} className=" text-[#f5f5f5] flex flex-col content-center mt-[20px] w-[50%]">
                <input onChange={handleChange}
                    name="userfirstname" value={input.userfirstname}
                    autoComplete="off"
                    className="form-group outline-none min-h-16 text-5xl"
                    placeholder="Your First Name"
                    type="comment"
                >
                </input>
                <input onChange={handleChange}
                    name="userlastname" value={input.userlastname}
                    autoComplete="off"
                    className="form-group outline-none min-h-16 text-5xl"
                    placeholder="Your Last Name"
                    type="comment"
                >
                </input>
                <textarea
                    onChange={handleChange}
                    name="comment"
                    value={input.comment}
                    autoComplete="off"
                    type="comment"
                    className="form-group outline-none text-5xl pt-3"
                    placeholder="Your Experience"
                    cols='30'
                    rows='5'
                >
                </textarea>
                <button className="post-button">Add Post</button>
            </form>
            <article className="comments-container text-[#f5f5f5] mb-10">
                <h1 className="postHeader text-center text-2xl pt-5 -mb-4">Fan Experiences</h1>
                {comments.map((item) => (
                    <section key={item.comment} className="mx-14 lg:mx-20 mt-10 mb-10">
                        <h2 className="whiteText tracking-wide text-center text-2xl md:text-5xl pb-2">{item.comment}</h2>
                        <h2 className="whiteText tracking-wide text-end text-lg md:text-3xl italic">- {item.userfirstname}&nbsp;{item.userlastname}</h2>
                    </section>))}
            </article>
        </main>
    )
}

export default Testimonials