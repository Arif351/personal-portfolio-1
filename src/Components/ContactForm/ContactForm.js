import React from 'react';

const ContactForm = () => {
    return (
        <div className="hero lg:w-6/12 w-10/12 mx-auto my-10">
            <div className="card flex-shrink-0 w-full shadow-2xl">
                <div className="card-body">
                    <h3 className="text-2xl text-center">Contact with me</h3>
                    <form action="https://formspree.io/f/xbjbnqdd"
                        method="POST">
                        <div className="form-control">
                            <input name='subject' value="Client Email" type="hidden" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input name='number' type="number" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <textarea name='message' className="textarea input-bordered" placeholder="Message" required></textarea>
                        </div>
                        <div className="card-actions">
                            <button type='submit' className="btn btn-block btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;