"use client";
import { useState } from "react";
import contactBg from "../../public/bg-image.jpeg";


export default function BookSeat() {
  const dataSet = { name: '', email: '',phone_number:'',reservation_date:"", reservation_time:"", number_of_people:1 }
  const [formData, setFormData] = useState(dataSet);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createReservation = async () => {
        const res = await fetch("http://localhost:8000/api/add_reservation", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone_number: formData.phone_number,
                        reservation_date:  formData.reservation_date,
                        reservation_time: formData.reservation_time,
                        number_of_people: formData.number_of_people
                    })
        })
        if (res.ok) {
            console.log('Task Created successfully!');
            alert('Task Created successfully');
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                reservation_date: '',
                reservation_time: '',
                number_of_people: 1
            })
        } else {
            alert('Failed to edit task:');
            console.error('Failed to edit task:', res.status, res.statusText);
        }
    }
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover opacity-25 hover:opacity-35"
        height="1200"
        src={contactBg.src}
        style={{
          aspectRatio: "1200/800",
          objectFit: "cover",
        }}
        width="1200"
      />
      <div className="relative z-10 text-center space-y-6 px-4 md:px-6">
        {/* uper jo ana hai woe */}
        <div className="text-white body-font ">
          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-5xl text-3xl font-extrabold title-font mb-4 text-white">
                Book a Seat
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                Reserve your table by filling out the form below.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-5">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div  className="">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="Full Name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      required
                      value={formData.email}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="phone_number"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Phone Number
                    </label>
                    <input
                      onChange={handleChange}
                      required   
                      value={formData.phone_number}  
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      placeholder="Phone Number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="reservation_date"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Date
                    </label>
                    <input
                      onChange={handleChange}
                      required
                      value={formData.reservation_date}
                      type  ="date"
                      id="reservation_date"
                      name="reservation_date"
                      placeholder="Date of reservation"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="reservation_time"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Time
                    </label>
                    <input
                      onChange={handleChange}
                      required
                      value={formData.reservation_time}
                      type="time"
                      id="reservation_time"
                      name="reservation_time"
                      placeholder="Timing of reservation"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="number_of_people"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Party Seats
                    </label>
                    <input
                      onChange={handleChange}
                      required
                      value={formData.number_of_people}
                      type= 'number'
                      id="number_of_people"
                      name="number_of_people"
                      min="1"
                      placeholder="Number of people"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button onClick={createReservation} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
