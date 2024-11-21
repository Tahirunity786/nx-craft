"use client"
import Input from "@/component/Input/Input";
import "./chat.css"

import { CldImage } from 'next-cloudinary';
import Button from "@/component/Button/Button";
import Text from "@/component/Text/Text";
const page = () => {
  return (
    <div className='container bg-light mb-3 mt-3 rounded-3'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='d-flex search-wrapper'>
            <div>
              <div className='arrow-box'>
                <CldImage src='https://res.cloudinary.com/dx9xdlbae/image/upload/v1731941073/Icons/arrow_nizfyr.png' alt='left-arrow' height={18} width={18} />
              </div>
            </div>
            <div>
              <div className="input-box">
                <CldImage className="search-img" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731941664/Icons/search_gspmw6.png" alt="search-icon" height={20} width={20} />
                <Input className="search-input" type="text" placeholder="Search messages, people" />
              </div>
            </div>
            <div>
              <div className='add-box'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="white"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>

              </div>
            </div>
            <div>

            </div>
          </div>
          <div className="button-box">
            <button className="all-btn">All</button>
            <button className="arc-btn">Archieve</button>
          </div>

          <div className="contact-box mt-4">

            <div className="d-flex chat-box">
              <div className="d-flex gap-3">
                <CldImage className="mt-1" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731954473/Images/chat_img_wwxjm7.png" alt="chat-img" height={45} width={45} />
                <div>
                  <h5 className="mb-0">Grace Millar</h5>
                  <p>lorem ipsum lorem ipsum</p>
                </div>
              </div>
              <div>
                <p>10:25 AM</p>
              </div>
            </div>
            <div className="d-flex chat-box">
              <div className="d-flex gap-3">
                <CldImage className="mt-1" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731954473/Images/chat_img_wwxjm7.png" alt="chat-img" height={45} width={45} />
                <div>
                  <h5 className="mb-0">Grace Millar</h5>
                  <p>lorem ipsum lorem ipsum</p>
                </div>
              </div>
              <div>
                <p>10:25 AM</p>
              </div>
            </div>

            <div className="d-flex chat-box">
              <div className="d-flex gap-3">
                <CldImage className="mt-1" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731954473/Images/chat_img_wwxjm7.png" alt="chat-img" height={45} width={45} />
                <div>
                  <h5 className="mb-0">Grace Millar</h5>
                  <p>lorem ipsum lorem ipsum</p>
                </div>
              </div>
              <div>
                <p>10:25 AM</p>
              </div>
            </div>

            <div className="d-flex chat-box">
              <div className="d-flex gap-3">
                <CldImage className="mt-1" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731954473/Images/chat_img_wwxjm7.png" alt="chat-img" height={45} width={45} />
                <div>
                  <h5 className="mb-0">Grace Millar</h5>
                  <p>lorem ipsum lorem ipsum</p>
                </div>
              </div>
              <div>
                <p>10:25 AM</p>
              </div>
            </div>
            <div className="d-flex chat-box">
              <div className="d-flex gap-3">
                <CldImage className="mt-1" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731954473/Images/chat_img_wwxjm7.png" alt="chat-img" height={45} width={45} />
                <div>
                  <h5 className="mb-0">Grace Millar</h5>
                  <p>lorem ipsum lorem ipsum</p>
                </div>
              </div>
              <div>
                <p>10:25 AM</p>
              </div>
            </div>

          </div>


        </div>


        <div className='col-lg-8'>
          <div className="chat-head d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <CldImage className="mt-1" src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1731954473/Images/chat_img_wwxjm7.png" alt="chat-img" height={45} width={45} />
              <div>
                <h5 className="mb-0 mt-1">Grace Millar</h5>
                <Text color="#00A3FF" fontSize="0.8rem" marginBottom="8px" fontWeight="bold">Online</Text>
              </div>
            </div>
            <div>
              <CldImage style={{ cursor: "pointer" }} src="https://res.cloudinary.com/dx9xdlbae/image/upload/v1732025739/Icons/Vector_i7ewds.png" alt="chat-img" height={25} width={8} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
