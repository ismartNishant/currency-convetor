
const AboutUs = () => {
  return (
    <div className='dark:bg-gray-900  dark:text-gray-100  text-gray-900 md:p-24 p-4  w-full'>
      <div className='md:px-48 px-4 '>
        <div className='mb-6'>
          <h1 className='text-3xl mb-2 '>About Us </h1>
          <p>
            Welcome to our Currency Converter app! We're thrilled to have you here and we're excited to tell you a bit more about ourselves.
          </p>
        </div>
        <div className='mb-6'>
          <h1 className='text-3xl mb-2'>Our Mission </h1>
          <p> Our mission is to provide a simple yet powerful tool for anyone who needs to convert currencies quickly and accurately. We understand the importance of having access to up-to-date and reliable exchange rates, whether you're traveling abroad, running a business, or simply managing your finances. That's why we built this app—to make currency conversion effortless and accessible to everyone.</p>
        </div>
        <div className='mb-6'>
          <h1 className='text-3xl mb-2'> What We Offer</h1>
          <p>Our Currency Converter app offers a range of features designed to meet your currency conversion needs: </p>

        </div>
        <div className='mb-6'>
          <ol className='list-disc'>
            <li><span className='font-bold text-xl'>Real-Time Exchange Rates: </span>We provide real-time exchange rates sourced from trusted financial institutions and updated regularly to ensure accuracy.</li>
            <li><span className='font-bold text-xl'>Wide Range of Currencies:  </span>Our app supports conversion for over 150 currencies worldwide, so you can convert between virtually any currency pair.</li>
            <li><span className='font-bold text-xl'>Easy-to-Use Interface:  </span>We've designed our app with simplicity and usability in mind, making it easy for anyone to convert currencies with just a few taps or clicks.</li>
          </ol>
        </div>
        <div className='mb-6'>
          <h1 className='text-3xl mb-2'> Our Team </h1>
          <p>We're a passionate team of developers and finance enthusiasts dedicated to creating innovative solutions that simplify everyday tasks. With backgrounds in software engineering and finance, we bring together our expertise to build products that make a difference in people's lives.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
