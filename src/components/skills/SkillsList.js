import React from 'react'
import { List,
  ListItem,
  SvgIcon, } from "@mui/material"
import "./SkillsList.scss"

function SkillsList() {
  return (
    <List
      className="skills-list"
      sx={{
        width: {
          md: "50%",
        },
        display: "flex",
        flexWrap: "wrap",
        ml: {
          xs: "15px",
          md: "5%",
        },
        fontFamily: "Montserrat Alternates",
      }}
    >
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <path d="M3.167,3.517H28.833V28.483H3.167Z" fill="#0c0824" />
          <path
            d="M3.167,3.517H28.833V28.483H3.167ZM2,29.65H30V2.35H2Zm18.877-16.1c-.922,0-1.237.467-1.237.852,0,.42.21.712,1.447,1.353,1.832.887,2.4,1.738,2.4,2.987,0,1.867-1.423,2.87-3.348,2.87a5.076,5.076,0,0,1-2.392-.5c-.082-.035-.093-.093-.093-.187V19.208c0-.117.058-.152.14-.093a4.33,4.33,0,0,0,2.345.688c.922,0,1.307-.385,1.307-.91,0-.42-.268-.793-1.447-1.4-1.657-.793-2.345-1.6-2.345-2.94,0-1.505,1.178-2.753,3.22-2.753a5.365,5.365,0,0,1,2.088.327.258.258,0,0,1,.117.233v1.6c0,.093-.058.152-.175.117a3.941,3.941,0,0,0-2.03-.525ZM10.843,14.938c.268.023.478.023.945.023,1.365,0,2.648-.478,2.648-2.333,0-1.482-.922-2.228-2.473-2.228-.467,0-.91.023-1.12.035Zm-2.077-6.2c0-.082.163-.14.257-.14.747-.035,1.855-.058,3.01-.058,3.232,0,4.492,1.773,4.492,4.037,0,2.963-2.147,4.235-4.783,4.235-.443,0-.595-.023-.91-.023v4.48c0,.093-.035.14-.14.14H8.907c-.093,0-.14-.035-.14-.14V8.743Z"
            fill="#31c5f0"
          />
        </SvgIcon>
        Photoshop
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "30px",
            height: "30px",
          }}
        >
          <path
            d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm0 1.846c5.595.007 10.128 4.545 10.128 10.141 0 5.601-4.54 10.141-10.141 10.141s-10.141-4.54-10.141-10.141c0-2.8 1.135-5.335 2.97-7.17 1.837-1.835 4.374-2.97 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23 2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519 1.67 2.485 5.539 2.77 5.539 2.77l1.846-1.846 1.846.923c2.914-1.334 4.615-4.19 4.615-4.615-.701.868-1.646 1.515-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462v-6.693c0-.581 1.342-2.354 1.846-3-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654c-.525.373-1.144.653-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"
            fill="#000000"
          />
        </SvgIcon>
        Unreal Engine
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <path d="M25.94 25.061l-5.382-9.060 5.382-9.064 2.598 9.062-2.599 9.060zM13.946 24.191l-6.768-6.717h10.759l5.38 9.061-9.372-2.342zM13.946 7.809l9.371-2.342-5.379 9.061h-10.761zM30.996 12.917l-3.282-11.913-12.251 3.193-1.812 3.112-3.68-0.027-8.966 8.719 8.967 8.72 3.678-0.029 1.817 3.112 12.246 3.192 3.283-11.908-1.864-3.087z"></path>
        </SvgIcon>
        Unity
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 123.30600000000001 595.279 595.279"
          sx={{
            width: "20px",
            height: "20px",
            mr: "3px",
          }}
        >
          <radialGradient
            id="a"
            cx="-183.69"
            cy="328.972"
            r=".76"
            gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#4b2b36" stopOpacity=".98" />
            <stop offset="1" stopColor="#250012" />
          </radialGradient>
          <path
            d="M24.803 155.549h545.674v530.792H24.803V155.549z"
            fill="url(#a)"
          />
          <path
            d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm376.515-339.311c-3.721-1.736-8.682-2.48-14.635-2.48-31.996 0-54.319 24.556-54.319 65.481 0 46.63 22.819 65.48 51.344 65.48 6.2 0 12.649-.744 17.61-2.976V371.834zm-13.147-40.429c5.209 0 8.186 0 13.146.496v-65.977c0-1.736 1.24-2.48 2.479-2.48h40.182c1.984 0 2.48.744 2.48 1.984V497.34c0 6.944 0 15.626 1.24 25.051 0 1.736-.496 1.984-2.232 2.977-21.331 10.169-43.901 14.634-64.984 14.634-54.815 0-94.005-33.98-94.005-103.182-.247-59.281 38.942-105.415 101.694-105.415zM217.774 533.057c0 2.479-.496 3.224-3.225 3.224h-38.197c-2.48 0-3.225-1.24-3.225-3.224V266.668c0-2.48 1.24-3.225 3.225-3.225h38.445c1.984 0 2.977.744 2.977 2.977v266.637z"
            fill="#ff408c"
          />
        </SvgIcon>
        Adobe Indesign
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
            fill="#1ABCFE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
            fill="#0ACF83"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
            fill="#FF7262"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
            fill="#F24E1E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
            fill="#A259FF"
          />
        </SvgIcon>
        Figma
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 128 128"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <defs>
            <linearGradient
              id="maya-original-a"
              gradientUnits="userSpaceOnUse"
              x1="100.777"
              y1="85.094"
              x2="86.576"
              y2="91.058"
            >
              <stop offset=".09" stopColor="#1A5964" />
              <stop offset=".3" stopColor="#137078" />
              <stop offset=".5" stopColor="#0E8085" />
              <stop offset=".66" stopColor="#0C858A" />
              <stop offset="1" stopColor="#0A8B8F" />
            </linearGradient>
            <linearGradient
              id="maya-original-b"
              gradientUnits="userSpaceOnUse"
              x1="99.581"
              y1="56.123"
              x2="130.166"
              y2="75.523"
            >
              <stop offset="0" stopColor="#079EA0" />
              <stop offset=".43" stopColor="#14878E" />
              <stop offset="1" stopColor="#256A77" />
            </linearGradient>
            <linearGradient
              id="maya-original-c"
              gradientUnits="userSpaceOnUse"
              x1="112"
              y1="16.835"
              x2="112"
              y2="120.497"
            >
              <stop offset="0" stopColor="#B4B4B4" />
              <stop offset=".8" stopColor="#03ABAB" />
              <stop offset="1" stopColor="#137980" />
            </linearGradient>
            <linearGradient
              id="maya-original-d"
              gradientUnits="userSpaceOnUse"
              x1="59.349"
              y1="57.417"
              x2="135.485"
              y2="42.575"
            >
              <stop offset="0" stopColor="#0F5D64" />
              <stop offset=".1" stopColor="#097A7E" />
              <stop offset=".23" stopColor="#049395" />
              <stop offset=".34" stopColor="#01A3A3" />
              <stop offset=".43" stopColor="#00A8A8" />
              <stop offset="1" stopColor="#4EBCC1" />
            </linearGradient>
            <linearGradient
              id="maya-original-e"
              gradientUnits="userSpaceOnUse"
              x1="-10.003"
              y1="72.033"
              x2="26.772"
              y2="50.748"
            >
              <stop offset="0" stopColor="#00A9A9" />
              <stop offset=".65" stopColor="#049496" />
              <stop offset="1" stopColor="#088286" />
            </linearGradient>
            <linearGradient
              id="maya-original-f"
              gradientUnits="userSpaceOnUse"
              x1="2.06"
              y1="91.643"
              x2="32.014"
              y2="89.985"
            >
              <stop offset="0" stopColor="#20626E" />
              <stop offset="1" stopColor="#069D9F" />
            </linearGradient>
            <linearGradient
              id="maya-original-g"
              gradientUnits="userSpaceOnUse"
              x1="41.036"
              y1="5.266"
              x2="36.336"
              y2="101.578"
            >
              <stop offset="0" stopColor="#99CBD2" />
              <stop offset=".9" stopColor="#498F93" />
              <stop offset="1" stopColor="#2E7B7D" />
            </linearGradient>
          </defs>
          <path fill="url(#maya-original-a)" d="M98 121h3V49l-6 9v56l3 7z" />
          <path
            fill="url(#maya-original-b)"
            d="M98 121V51l23-44h5v54l-22 60h-6"
          />
          <path
            fill="url(#maya-original-c)"
            d="M126 121H98c2.9-5.7 14.1-29.2 19-48 8.5-33.1 9-58 9-58v106z"
          />
          <path
            fill="url(#maya-original-d)"
            d="M126 7H89L63 69l11 30h1c.4 0 1-.3 2-2 4.1-7.6 49-90 49-90z"
          />
          <path
            fill="url(#maya-original-e)"
            d="M2 121.7l3-.7 27-49V56L5 9 2 7.4v114.3z"
          />
          <path
            fill="url(#maya-original-f)"
            d="M32 59.1c-2.3 6.9-7.9 23.6-13.6 34.3C8.2 113 2 121.7 2 121.7s23.7 2 30-5.7V60v-.9z"
          />
          <path
            fill="url(#maya-original-g)"
            d="M52 97c1 1.8 1.6 2 2 2h21c.2-.2.4-.4.4-.7-.1-.4-.2-.9-.4-1.3L38 4 2 7.4S47.7 89.2 52 97z"
          />
        </SvgIcon>
        Maya
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <rect
            x="8"
            y="2"
            width="24"
            height="28"
            rx="2"
            fill="url(#paint0_linear_87_7724)"
          />

          <path
            d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z"
            fill="url(#paint1_linear_87_7724)"
          />
          <rect
            x="8"
            y="16"
            width="24"
            height="7"
            fill="url(#paint2_linear_87_7724)"
          />
          <rect
            x="8"
            y="9"
            width="24"
            height="7"
            fill="url(#paint3_linear_87_7724)"
          />
          <path
            d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z"
            fill="#000000"
            fillOpacity="0.3"
          />
          <rect
            y="7"
            width="18"
            height="18"
            rx="2"
            fill="url(#paint4_linear_87_7724)"
          />
          <path
            d="M15 11.0142H13.0523L11.5229 17.539L9.84967 11H8.20261L6.51634 17.539L5 11.0142H3L5.60131 21H7.3268L9 14.6879L10.6732 21H12.3987L15 11.0142Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_87_7724"
              x1="8"
              y1="6.66667"
              x2="32"
              y2="6.66667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2B78B1" />
              <stop offset="1" stopColor="#338ACD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_87_7724"
              x1="8"
              y1="27.375"
              x2="32"
              y2="27.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B366F" />
              <stop offset="1" stopColor="#2657B0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_87_7724"
              x1="18.5"
              y1="20"
              x2="32"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#20478B" />
              <stop offset="1" stopColor="#2D6FD1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_87_7724"
              x1="18.5"
              y1="13"
              x2="32"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#215295" />
              <stop offset="1" stopColor="#2E84D3" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_87_7724"
              x1="3.31137e-08"
              y1="17"
              x2="19"
              y2="17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#223E74" />
              <stop offset="1" stopColor="#215091" />
            </linearGradient>
          </defs>
        </SvgIcon>
        Mirosoft Word
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <defs>
            <linearGradient
              id="a"
              x1="4.494"
              y1="-1748.086"
              x2="13.832"
              y2="-1731.914"
              gradientTransform="translate(0 1756)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ca4c28" />
              <stop offset="0.5" stopColor="#c5401e" />
              <stop offset="1" stopColor="#b62f14" />
            </linearGradient>
          </defs>
          <title>file_type_powerpoint</title>
          <path
            d="M18.93,17.3,16.977,3h-.146A12.9,12.9,0,0,0,3.953,15.854V16Z"
            fill="#ed6c47"
          />
          <path
            d="M17.123,3h-.146V16l6.511,2.6L30,16v-.146A12.9,12.9,0,0,0,17.123,3Z"
            fill="#ff8f6b"
          />
          <path
            d="M30,16v.143A12.905,12.905,0,0,1,17.12,29h-.287A12.907,12.907,0,0,1,3.953,16.143V16Z"
            fill="#d35230"
          />
          <path
            d="M17.628,9.389V23.26a1.2,1.2,0,0,1-.742,1.1,1.16,1.16,0,0,1-.45.091H7.027c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85c.143-.221.293-.442.456-.65h9.93A1.2,1.2,0,0,1,17.628,9.389Z"
            opacity="0.10000000149011612"
            isolation="isolate"
          />
          <path
            d="M16.977,10.04V23.911a1.15,1.15,0,0,1-.091.448,1.2,1.2,0,0,1-1.1.741H7.62q-.309-.314-.593-.65c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z"
            opacity="0.20000000298023224"
            isolation="isolate"
          />
          <path
            d="M16.977,10.04V22.611A1.2,1.2,0,0,1,15.785,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z"
            oacity="0.20000000298023224"
            isolation="isolate"
          />
          <path
            d="M16.326,10.04V22.611A1.2,1.2,0,0,1,15.134,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.084A1.2,1.2,0,0,1,16.326,10.04Z"
            opacity="0.20000000298023224"
            isolation="isolate"
          />
          <path
            d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z"
            fill="#d35230"
          />
          <path
            d="M9.293,12.028a3.287,3.287,0,0,1,2.174.636,2.27,2.27,0,0,1,.756,1.841,2.555,2.555,0,0,1-.373,1.376,2.49,2.49,0,0,1-1.059.935A3.607,3.607,0,0,1,9.2,17.15H7.687v2.8H6.141V12.028ZM7.686,15.94H9.017a1.735,1.735,0,0,0,1.177-.351,1.3,1.3,0,0,0,.4-1.025q0-1.309-1.525-1.31H7.686V15.94Z"
            fill="#fff"
          />
        </SvgIcon>
        Powerpoint
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <path
            d="M19.581,15.35,8.512,13.4V27.809A1.192,1.192,0,0,0,9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5Z"
            fill="#185c37"
          />
          <path
            d="M19.581,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5L19.581,16l5.861,1.95L30,16V9.5Z"
            fill="#21a366"
          />
          <path d="M8.512,9.5H19.581V16H8.512Z" fill="#107c41" />
          <path
            d="M16.434,8.2H8.512V24.45h7.922a1.2,1.2,0,0,0,1.194-1.191V9.391A1.2,1.2,0,0,0,16.434,8.2Z"
            opacity="0.10000000149011612"
            isolation="isolate"
          />
          <path
            d="M15.783,8.85H8.512V25.1h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z"
            opacity="0.20000000298023224"
            isolation="isolate"
          />
          <path
            d="M15.783,8.85H8.512V23.8h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z"
            opacity="0.20000000298023224"
            isolation="isolate"
          />
          <path
            d="M15.132,8.85H8.512V23.8h6.62a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.132,8.85Z"
            opacity="0.20000000298023224"
            isolation="isolate"
          />
          <path
            d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z"
            fill="#185c37"
          />
          <path
            d="M5.7,19.873l2.511-3.884-2.3-3.862H7.758L9.013,14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359,3.84,2.419,3.905H10.821l-1.45-2.711A2.355,2.355,0,0,1,9.2,16.8H9.176a1.688,1.688,0,0,1-.168.351L7.515,19.873Z"
            fill="#fff"
          />
          <path
            d="M28.806,3H19.581V9.5H30V4.191A1.192,1.192,0,0,0,28.806,3Z"
            fill="#33c481"
          />
          <path d="M19.581,16H30v6.5H19.581Z" fill="#107c41" />
        </SvgIcon>
        Excel
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 512.47 499.66"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <path
            className="a"
            d="M90.75,0h331a90.75,90.75,0,0,1,90.75,90.75V408.91a90.75,90.75,0,0,1-90.75,90.75h-331A90.75,90.75,0,0,1,0,408.91V90.75A90.75,90.75,0,0,1,90.75,0Z"
            fill="#1e3101"
          />
          <path
            className="b"
            d="M110.85,350.39V130.71c0-1.6.68-2.4,2.06-2.4q5.49,0,13.06-.17t16.33-.35l18.57-.34q9.8-.18,19.42-.18,26.13,0,44,6.54A76.18,76.18,0,0,1,253,151.34a67.28,67.28,0,0,1,15.64,24.24,80.35,80.35,0,0,1,4.82,27.67q0,27.51-12.72,45.38a72,72,0,0,1-34.38,26,137.05,137.05,0,0,1-48.13,8.08q-7.57,0-10.66-.18c-2.06-.11-5.16-.17-9.28-.17v67.73a2.74,2.74,0,0,1-2.32,3.09,2.49,2.49,0,0,1-.77,0H113.25C111.65,353.14,110.85,352.23,110.85,350.39Zm47.44-180.83v71.17q4.46.35,8.25.34h11.34a81.19,81.19,0,0,0,24.58-3.44A37.11,37.11,0,0,0,220,226.29q6.7-7.9,6.7-22a34.81,34.81,0,0,0-5-18.9,32.14,32.14,0,0,0-15-12.21,63.8,63.8,0,0,0-25.09-4.29q-8.25,0-14.61.17t-8.77.51Z"
            fill="#99e83f"
          />
          <path
            className="b"
            d="M401,319.11V347.3q0,3.78-2.75,4.47a122.82,122.82,0,0,1-13.75,3.44A88.75,88.75,0,0,1,368,356.58q-22.35,0-35.06-11.69t-12.72-37.47V222.16H299.92c-1.83,0-2.75-1-2.75-3.09V185c0-1.83,1-2.75,3.1-2.75h20.28q.34-5.84.86-13.58c.35-5.15.8-10.31,1.38-15.47s1.08-9.34,1.54-12.54a6.09,6.09,0,0,1,1-1.89,3.74,3.74,0,0,1,1.72-1.21L368,132.44a2.87,2.87,0,0,1,1.89.09c.46.23.52.83.52,2q-.69,7.91-1,21.49t-.69,26.29h32c1.38,0,2.07.92,2.07,2.75v34.73a2.12,2.12,0,0,1-1.72,2.4H368.34v73.57q0,11.7,4,16.68t14.61,5c2.06,0,4-.05,5.85-.17s3.66-.29,5.5-.52a2.21,2.21,0,0,1,1.89.17A2.44,2.44,0,0,1,401,319.11Z"
            fill="#99e83f"
          />
        </SvgIcon>
        Substance 3D Painter
      </ListItem>
      <ListItem
        sx={{
          width: "50%",
        }}
      >
        <SvgIcon
          viewBox="0 0 30 30"
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          <path
            d="M22.728 1.024h-4.356l3.868 6-8.182-6h-4.362l3.872 7.862-8.182-7.862h-4.362l3.806 10.148-3.806 19.804h4.362l8.18-21.234-3.87 21.234h4.36l8.184-23.096-3.87 23.096h4.358l8.248-25.368-8.248-4.584z"
            fill="#000000"
          ></path>
        </SvgIcon>
        Miro
      </ListItem>
    </List>
  );
}

export default SkillsList