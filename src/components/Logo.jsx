export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Carrot Body */}
      <path
        d="M50 95C50 95 20 60 20 40C20 25 33.4315 25 50 25C66.5685 25 80 25 80 40C80 60 50 95 50 95Z"
        fill="#F97316"
        stroke="#18181b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Lines on Carrot */}
      <path
        d="M30 40H45"
        stroke="#18181b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M60 55H70"
        stroke="#18181b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M35 70H50"
        stroke="#18181b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M50 25C50 25 40 5 30 5C20 5 35 25 50 25Z"
        fill="#F97316"
        stroke="#18181b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M50 25C50 25 60 5 70 5C80 5 65 25 50 25Z"
        fill="#F97316"
        stroke="#18181b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

