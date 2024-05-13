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
            <header className='testimonials-header py-2 md:py-5 w-full text-center'><span className='text-[1.75rem] md:text-[2rem]'>T</span><span className='text-[1.55rem] md:text-3xl'>ESTIMONIAL</span><span className='text-[1.75rem] md:text-[2rem]'>S</span></header>
            <article className="comments-container flex flex-col items-center text-[whitesmoke]">
                {comments.map((item) => (
                    <section key={item.comment} className="comment-name px-5 lg:px-20 py-10">
                        <h2 className="text-center text-xl md:text-3xl pb-2">{item.comment}</h2>
                        <h2 className="text-end text-base md:text-xl italic">- {item.userfirstname}&nbsp;{item.userlastname}</h2>
                    </section>))}
                <header className='text-center text-xl md:text-3xl pb-2 mt-10'>Post About Your Experience with Revival</header>
                <form onSubmit={handleSubmit} className="text-[#f5f5f5] flex flex-col content-center w-[80%] lg:w-[50%] mb-10">
                    <article className='comments-form flex flex-col rounded-xl'>
                        <input onChange={handleChange}
                            name="userfirstname" value={input.userfirstname}
                            autoComplete="off"
                            className="user-first-name outline-none h-10 px-2 my-1 text-xl bg-transparent rounded-xl"
                            placeholder="Your First Name"
                            type="comment"
                        >
                        </input>
                        <input onChange={handleChange}
                            name="userlastname" value={input.userlastname}
                            autoComplete="off"
                            className="user-last-name outline-none h-10 px-2 my-1 text-xl bg-transparent rounded-xl"
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
                            className="user-experience outline-none px-2 py-2 my-1 text-xl bg-transparent rounded-xl"
                            placeholder="Your Experience"
                            cols='10'
                            rows='3'
                        >
                        </textarea>
                    </article>
                    <button className="post-button w-fit p-3 mt-1 rounded-xl">Add Post</button>
                </form>
                <a href='/#top' className='testimonials-top-link flex justify-center py-2 w-full text-xl'>To the Top</a>
            </article>
        </main>
    )
}

export default Testimonials