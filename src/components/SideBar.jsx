import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MENU_ITEMS = [
  {
    path: "/main",
    label: "Home",
    icon: (
      <path
        d="M10.5495 2.53189C11.3874 1.82531 12.6126 1.82531 13.4505 2.5319L20.2005 8.224C20.7074 8.65152 21 9.2809 21 9.94406V19.7468C21 20.7133 20.2165 21.4968 19.25 21.4968H15.75C14.7835 21.4968 14 20.7133 14 19.7468V14.2468C14 14.1088 13.8881 13.9968 13.75 13.9968H10.25C10.1119 13.9968 9.99999 14.1088 9.99999 14.2468V19.7468C9.99999 20.7133 9.2165 21.4968 8.25 21.4968H4.75C3.7835 21.4968 3 20.7133 3 19.7468V9.94406C3 9.2809 3.29255 8.65152 3.79952 8.224L10.5495 2.53189ZM12.4835 3.6786C12.2042 3.44307 11.7958 3.44307 11.5165 3.6786L4.76651 9.37071C4.59752 9.51321 4.5 9.72301 4.5 9.94406V19.7468C4.5 19.8849 4.61193 19.9968 4.75 19.9968H8.25C8.38807 19.9968 8.49999 19.8849 8.49999 19.7468V14.2468C8.49999 13.2803 9.2835 12.4968 10.25 12.4968H13.75C14.7165 12.4968 15.5 13.2803 15.5 14.2468V19.7468C15.5 19.8849 15.6119 19.9968 15.75 19.9968H19.25C19.3881 19.9968 19.5 19.8849 19.5 19.7468V9.94406C19.5 9.72301 19.4025 9.51321 19.2335 9.37071L12.4835 3.6786Z"
        fill="#212121"
      />
    ),
  },
  {
    path: "/rank",
    label: "Ranking",
    icon: (
      <>
        <path
          d="M8.67 22.75H2C1.59 22.75 1.25 22.41 1.25 22V16C1.25 14.48 2.48 13.25 4 13.25H8.67C9.08 13.25 9.42 13.59 9.42 14V22C9.42 22.41 9.08 22.75 8.67 22.75ZM2.75 21.25H7.92V14.75H4C3.31 14.75 2.75 15.31 2.75 16V21.25Z"
          fill="black"
        />
        <path
          d="M15.3302 22.75H8.66016C8.25016 22.75 7.91016 22.41 7.91016 22V12C7.91016 10.48 9.14016 9.25 10.6602 9.25H13.3302C14.8502 9.25 16.0802 10.48 16.0802 12V22C16.0802 22.41 15.7502 22.75 15.3302 22.75ZM9.42015 21.25H14.5902V12C14.5902 11.31 14.0302 10.75 13.3402 10.75H10.6702C9.98015 10.75 9.42015 11.31 9.42015 12V21.25Z"
          fill="black"
        />
        <path
          d="M22.0001 22.75H15.3301C14.9201 22.75 14.5801 22.41 14.5801 22V17C14.5801 16.59 14.9201 16.25 15.3301 16.25H20.0001C21.5201 16.25 22.7501 17.48 22.7501 19V22C22.7501 22.41 22.4101 22.75 22.0001 22.75ZM16.0801 21.25H21.2501V19C21.2501 18.31 20.6901 17.75 20.0001 17.75H16.0801V21.25Z"
          fill="black"
        />
        <path
          d="M13.6999 8.34999C13.4599 8.34999 13.1599 8.27997 12.8199 8.07997L11.9999 7.58998L11.1899 8.06999C10.3699 8.55999 9.82989 8.26998 9.62989 8.12998C9.42989 7.98998 8.99989 7.54998 9.20989 6.62998L9.39989 5.79997L8.71989 5.11997C8.29989 4.69997 8.14989 4.19997 8.29989 3.73997C8.44989 3.27997 8.85989 2.95996 9.43989 2.85996L10.3099 2.70997L10.7999 1.72999C11.3399 0.65999 12.6499 0.65999 13.1799 1.72999L13.6699 2.70997L14.5399 2.85996C15.1199 2.95996 15.5399 3.27997 15.6799 3.73997C15.8299 4.19997 15.6699 4.69997 15.2599 5.11997L14.5799 5.79997L14.7699 6.62998C14.9799 7.55998 14.5499 7.98999 14.3499 8.13999C14.2599 8.21999 14.0299 8.34999 13.6999 8.34999Z"
          fill="black"
        />
      </>
    ),
  },
  {
    path: "/info",
    label: "Information",
    icon: (
      <>
        <title />
        <g
          data-name="user people person users man"
          id="user_people_person_users_man"
        >
          <path d="M23.74,16.18a1,1,0,1,0-1.41,1.42A9,9,0,0,1,25,24c0,1.22-3.51,3-9,3s-9-1.78-9-3a9,9,0,0,1,2.63-6.37,1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0A10.92,10.92,0,0,0,5,24c0,3.25,5.67,5,11,5s11-1.75,11-5A10.94,10.94,0,0,0,23.74,16.18Z" />
          <path d="M16,17a7,7,0,1,0-7-7A7,7,0,0,0,16,17ZM16,5a5,5,0,1,1-5,5A5,5,0,0,1,16,5Z" />
        </g>
      </>
    ),
  },
  {
    path: "/reservation",
    label: "Reservation",
    icon: (
      <>
        <title />
        <path d="M18,5V3a1,1,0,0,0-2,0V5H8V3A1,1,0,0,0,6,3V5H2V21H22V5Zm2,14H4V7H20Zm-3.94-7.58-1.2-1.2L11.3,13.78,9.14,11.63l-1.2,1.2,3.36,3.36Z" />
      </>
    ),
  },
  {
    path: "/set",
    label: "Setting",
    icon: (
      <>
        <title />
        <path d="M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" />
        <path d="M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" />
      </>
    ),
  },
];

let Sidebox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  // width: 20rem;
  // width: 241px;
  // margin: 0 87px 0 0;
  border-right: solid 1px rgba(189, 191, 163, 0.3);
  background-color: rgba(189, 191, 163, 0.15);
`;

let SideBtn = styled.button`
  display: flex;
  align-items: center;
  color: black;
  text-align: left;
  margin-top: 80px;
  border: none;
  height: 24px;
`;

let SvgIcon = styled.svg`
  margin-right: 38px;
  margin-left: 42px;
  margin-top: 80px;
`;

let BtnIconGroup = styled.div`
  display: flex;
  align-items: center;
`;
let Logo = styled.div`
  width: 173px;
  height: 88px;
  flex-grow: 0;
  font-size: 60px;
  font-weight: 900;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  margin-top: 95px;
  margin-bottom: 59px;
  margin-left: 31px;
`;
let Search = styled.div`
  border: 1px solid black;
  border-radius: 27px;
  width: 170px;
  // width: 10rem;
  height: 30px;
  margin-left: 42px;
`;
let SearchIcorn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
`;

export default function SideBar() {
  let navigate = useNavigate();

  return (
    <Sidebox>
      <Logo>42srr</Logo>
      <Search>
        <SearchIcorn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </SearchIcorn>
      </Search>
      <BtnIconGroup>
        <SvgIcon
          fill="none"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5495 2.53189C11.3874 1.82531 12.6126 1.82531 13.4505 2.5319L20.2005 8.224C20.7074 8.65152 21 9.2809 21 9.94406V19.7468C21 20.7133 20.2165 21.4968 19.25 21.4968H15.75C14.7835 21.4968 14 20.7133 14 19.7468V14.2468C14 14.1088 13.8881 13.9968 13.75 13.9968H10.25C10.1119 13.9968 9.99999 14.1088 9.99999 14.2468V19.7468C9.99999 20.7133 9.2165 21.4968 8.25 21.4968H4.75C3.7835 21.4968 3 20.7133 3 19.7468V9.94406C3 9.2809 3.29255 8.65152 3.79952 8.224L10.5495 2.53189ZM12.4835 3.6786C12.2042 3.44307 11.7958 3.44307 11.5165 3.6786L4.76651 9.37071C4.59752 9.51321 4.5 9.72301 4.5 9.94406V19.7468C4.5 19.8849 4.61193 19.9968 4.75 19.9968H8.25C8.38807 19.9968 8.49999 19.8849 8.49999 19.7468V14.2468C8.49999 13.2803 9.2835 12.4968 10.25 12.4968H13.75C14.7165 12.4968 15.5 13.2803 15.5 14.2468V19.7468C15.5 19.8849 15.6119 19.9968 15.75 19.9968H19.25C19.3881 19.9968 19.5 19.8849 19.5 19.7468V9.94406C19.5 9.72301 19.4025 9.51321 19.2335 9.37071L12.4835 3.6786Z"
            fill="#212121"
          />
        </SvgIcon>
        <SideBtn
          onClick={() => {
            navigate("/main");
          }}
        >
          Home
        </SideBtn>
      </BtnIconGroup>
      <BtnIconGroup>
        <SvgIcon
          fill="none"
          viewBox="0 0 24 24"
          x="0px"
          y="0px"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.67 22.75H2C1.59 22.75 1.25 22.41 1.25 22V16C1.25 14.48 2.48 13.25 4 13.25H8.67C9.08 13.25 9.42 13.59 9.42 14V22C9.42 22.41 9.08 22.75 8.67 22.75ZM2.75 21.25H7.92V14.75H4C3.31 14.75 2.75 15.31 2.75 16V21.25Z"
            fill="black"
          />
          <path
            d="M15.3302 22.75H8.66016C8.25016 22.75 7.91016 22.41 7.91016 22V12C7.91016 10.48 9.14016 9.25 10.6602 9.25H13.3302C14.8502 9.25 16.0802 10.48 16.0802 12V22C16.0802 22.41 15.7502 22.75 15.3302 22.75ZM9.42015 21.25H14.5902V12C14.5902 11.31 14.0302 10.75 13.3402 10.75H10.6702C9.98015 10.75 9.42015 11.31 9.42015 12V21.25Z"
            fill="black"
          />
          <path
            d="M22.0001 22.75H15.3301C14.9201 22.75 14.5801 22.41 14.5801 22V17C14.5801 16.59 14.9201 16.25 15.3301 16.25H20.0001C21.5201 16.25 22.7501 17.48 22.7501 19V22C22.7501 22.41 22.4101 22.75 22.0001 22.75ZM16.0801 21.25H21.2501V19C21.2501 18.31 20.6901 17.75 20.0001 17.75H16.0801V21.25Z"
            fill="black"
          />
          <path
            d="M13.6999 8.34999C13.4599 8.34999 13.1599 8.27997 12.8199 8.07997L11.9999 7.58998L11.1899 8.06999C10.3699 8.55999 9.82989 8.26998 9.62989 8.12998C9.42989 7.98998 8.99989 7.54998 9.20989 6.62998L9.39989 5.79997L8.71989 5.11997C8.29989 4.69997 8.14989 4.19997 8.29989 3.73997C8.44989 3.27997 8.85989 2.95996 9.43989 2.85996L10.3099 2.70997L10.7999 1.72999C11.3399 0.65999 12.6499 0.65999 13.1799 1.72999L13.6699 2.70997L14.5399 2.85996C15.1199 2.95996 15.5399 3.27997 15.6799 3.73997C15.8299 4.19997 15.6699 4.69997 15.2599 5.11997L14.5799 5.79997L14.7699 6.62998C14.9799 7.55998 14.5499 7.98999 14.3499 8.13999C14.2599 8.21999 14.0299 8.34999 13.6999 8.34999ZM11.9999 6.07997C12.2399 6.07997 12.4799 6.13999 12.6799 6.25999L13.2399 6.58998L13.1199 6.04997C13.0199 5.62997 13.1699 5.11998 13.4799 4.80998L13.9899 4.29997L13.3599 4.18998C12.9599 4.11998 12.5699 3.82998 12.3899 3.46998L11.9999 2.71998L11.6199 3.46998C11.4399 3.82998 11.0499 4.11998 10.6499 4.18998L10.0199 4.28999L10.5299 4.79997C10.8399 5.10997 10.9799 5.61999 10.8899 6.03999L10.7699 6.57997L11.3299 6.24998C11.5199 6.12998 11.7599 6.07997 11.9999 6.07997Z"
            fill="black"
          />
        </SvgIcon>
        <SideBtn
          onClick={() => {
            navigate("/rank");
          }}
        >
          Ranking
        </SideBtn>
      </BtnIconGroup>
      <BtnIconGroup>
        <SvgIcon
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
        >
          <title />
          <g
            data-name="user people person users man"
            id="user_people_person_users_man"
          >
            <path d="M23.74,16.18a1,1,0,1,0-1.41,1.42A9,9,0,0,1,25,24c0,1.22-3.51,3-9,3s-9-1.78-9-3a9,9,0,0,1,2.63-6.37,1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0A10.92,10.92,0,0,0,5,24c0,3.25,5.67,5,11,5s11-1.75,11-5A10.94,10.94,0,0,0,23.74,16.18Z" />
            <path d="M16,17a7,7,0,1,0-7-7A7,7,0,0,0,16,17ZM16,5a5,5,0,1,1-5,5A5,5,0,0,1,16,5Z" />
          </g>
        </SvgIcon>
        <SideBtn
          onClick={() => {
            navigate("/info");
          }}
        >
          Information
        </SideBtn>
      </BtnIconGroup>
      <BtnIconGroup>
        <SvgIcon
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 24 24"
          x="0px"
          y="0px"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M18,5V3a1,1,0,0,0-2,0V5H8V3A1,1,0,0,0,6,3V5H2V21H22V5Zm2,14H4V7H20Zm-3.94-7.58-1.2-1.2L11.3,13.78,9.14,11.63l-1.2,1.2,3.36,3.36Z" />
        </SvgIcon>
        <SideBtn
          onClick={() => {
            navigate("/reservation");
          }}
        >
          Reservation
        </SideBtn>
      </BtnIconGroup>
      <BtnIconGroup>
        <SvgIcon
          data-name="Livello 1"
          id="Livello_1"
          viewBox="0 0 128 128"
          x="0px"
          y="0px"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" />
          <path d="M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" />
        </SvgIcon>
        <SideBtn
          onClick={() => {
            navigate("/set");
          }}
        >
          Setting
        </SideBtn>
      </BtnIconGroup>
    </Sidebox>
  );
}
