import React, {useState} from 'react';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9654d61f-1c42-4d30-a5be-5fd59dc34138");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='pt-20 '>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto ' action="">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            name='name' />
            <input type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            name='email' />
        </div>
        <textarea rows='6' placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
        name='message'></textarea>

        <button type='submit' className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Submit Now
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
