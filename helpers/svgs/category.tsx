import { FC } from "react";

export const SvgPackaging: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="packaging-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <path
          fillRule="evenodd"
          d="M12 32 H64 V58 Q64 63 59 63 H17 Q12 63 12 58 Z M38 41 a4.5 4.5 0 1 0 0.001 0 Z"
        />
        <path d="M14 28 L24 13 H52 L62 28 Z" />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#packaging-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="packaging-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <path
          fillRule="evenodd"
          d="M12 32 H64 V58 Q64 63 59 63 H17 Q12 63 12 58 Z M38 41 a4.5 4.5 0 1 0 0.001 0 Z"
        />
        <path d="M14 28 L24 13 H52 L62 28 Z" />
      </g>
    </svg>
  </div>
);
export const SvgFasteners: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="fasteners-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <path d="M38 8 L54 17 V33 L38 42 L22 33 V17 Z" />
        <path
          fillRule="evenodd"
          d="M32 46 H44 V60 Q44 68 38 68 Q32 68 32 60 Z M34.5 50 h7 v2.6 h-7 Z M34.5 55 h7 v2.6 h-7 Z M34.5 60 h7 v2.6 h-7 Z"
        />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#fasteners-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="fasteners-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <path d="M38 8 L54 17 V33 L38 42 L22 33 V17 Z" />
        <path
          fillRule="evenodd"
          d="M32 46 H44 V60 Q44 68 38 68 Q32 68 32 60 Z M34.5 50 h7 v2.6 h-7 Z M34.5 55 h7 v2.6 h-7 Z M34.5 60 h7 v2.6 h-7 Z"
        />
      </g>
    </svg>
  </div>
);
export const SvgElectronics: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="electronics-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <rect x="23" y="23" width="30" height="30" rx="4" />
        <rect x="27" y="10" width="5" height="11" rx="1.5" />
        <rect x="35.5" y="10" width="5" height="11" rx="1.5" />
        <rect x="44" y="10" width="5" height="11" rx="1.5" />
        <rect x="27" y="55" width="5" height="11" rx="1.5" />
        <rect x="35.5" y="55" width="5" height="11" rx="1.5" />
        <rect x="44" y="55" width="5" height="11" rx="1.5" />
        <rect x="10" y="27" width="11" height="5" rx="1.5" />
        <rect x="10" y="35.5" width="11" height="5" rx="1.5" />
        <rect x="10" y="44" width="11" height="5" rx="1.5" />
        <rect x="55" y="27" width="11" height="5" rx="1.5" />
        <rect x="55" y="35.5" width="11" height="5" rx="1.5" />
        <rect x="55" y="44" width="11" height="5" rx="1.5" />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#electronics-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="electronics-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <rect x="23" y="23" width="30" height="30" rx="4" />
        <rect x="27" y="10" width="5" height="11" rx="1.5" />
        <rect x="35.5" y="10" width="5" height="11" rx="1.5" />
        <rect x="44" y="10" width="5" height="11" rx="1.5" />
        <rect x="27" y="55" width="5" height="11" rx="1.5" />
        <rect x="35.5" y="55" width="5" height="11" rx="1.5" />
        <rect x="44" y="55" width="5" height="11" rx="1.5" />
        <rect x="10" y="27" width="11" height="5" rx="1.5" />
        <rect x="10" y="35.5" width="11" height="5" rx="1.5" />
        <rect x="10" y="44" width="11" height="5" rx="1.5" />
        <rect x="55" y="27" width="11" height="5" rx="1.5" />
        <rect x="55" y="35.5" width="11" height="5" rx="1.5" />
        <rect x="55" y="44" width="11" height="5" rx="1.5" />
      </g>
    </svg>
  </div>
);
export const SvgSafety: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="safety-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <path d="M15 45 Q15 21 38 21 Q61 21 61 45 Z" />
        <rect x="9" y="45" width="58" height="8" rx="4" />
        <path d="M33 21 H43 V12 Q43 9 38 9 Q33 9 33 12 Z" />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#safety-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="safety-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <path d="M15 45 Q15 21 38 21 Q61 21 61 45 Z" />
        <rect x="9" y="45" width="58" height="8" rx="4" />
        <path d="M33 21 H43 V12 Q43 9 38 9 Q33 9 33 12 Z" />
      </g>
    </svg>
  </div>
);
export const SvgTools: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="tools-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <rect x="10" y="22" width="34" height="17" rx="3" />
        <rect x="44" y="25" width="7" height="11" rx="1.5" />
        <rect x="51" y="28" width="15" height="5" rx="2" />
        <path d="M19 39 H31 L27.5 62 Q27 66 23 66 H18.5 Q15 66 15.6 62 Z" />
        <rect x="33" y="39" width="7" height="7" rx="2" />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#tools-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="tools-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <rect x="10" y="22" width="34" height="17" rx="3" />
        <rect x="44" y="25" width="7" height="11" rx="1.5" />
        <rect x="51" y="28" width="15" height="5" rx="2" />
        <path d="M19 39 H31 L27.5 62 Q27 66 23 66 H18.5 Q15 66 15.6 62 Z" />
        <rect x="33" y="39" width="7" height="7" rx="2" />
      </g>
    </svg>
  </div>
);
export const SvgElectrical: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="electrical-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <path d="M42 8 L20 42 H34 L30 68 L56 32 H41 Z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#electrical-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="electrical-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <path d="M42 8 L20 42 H34 L30 68 L56 32 H41 Z" />
    </svg>
  </div>
);
export const SvgLab: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="lab-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <rect x="31" y="9" width="14" height="6" rx="2" />
        <path d="M33 15 H43 V29 L58.5 57.5 Q62.5 65 54 65 H22 Q13.5 65 17.5 57.5 L33 29 Z" />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#lab-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="lab-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <g>
        <rect x="31" y="9" width="14" height="6" rx="2" />
        <path d="M33 15 H43 V29 L58.5 57.5 Q62.5 65 54 65 H22 Q13.5 65 17.5 57.5 L33 29 Z" />
      </g>
    </svg>
  </div>
);
export const SvgOffice: FC<any> = ({ isActive }) => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="#fff"
      className={`absolute top-0 left-0 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <defs>
        <linearGradient id="office-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        d="M18 8 H46 L58 20 V65 Q58 68 55 68 H21 Q18 68 18 65 Z M46 8 L58 20 H46 Z M26 34 H50 V37.5 H26 Z M26 42 H50 V45.5 H26 Z M26 50 H42 V53.5 H26 Z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="url(#office-grad)"
      className={`${isActive ? "hidden" : "group-hover:hidden"}`}
    >
      <defs>
        <linearGradient id="office-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        d="M18 8 H46 L58 20 V65 Q58 68 55 68 H21 Q18 68 18 65 Z M46 8 L58 20 H46 Z M26 34 H50 V37.5 H26 Z M26 42 H50 V45.5 H26 Z M26 50 H42 V53.5 H26 Z"
      />
    </svg>
  </div>
);
export const SvgFilter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16.431" height="16.832" viewBox="0 0 16.431 16.832">
    <path
      id="Path_59"
      data-name="Path 59"
      d="M292.094,108.742a.851.851,0,0,1-.588-.239.963.963,0,0,1-.275-.752v-5.507c0-.129,0-.259,0-.388a1.65,1.65,0,0,0-.345-1.082q-2-2.8-3.986-5.609L285.649,93.4a.88.88,0,0,1-.016-1.171,1.16,1.16,0,0,1,.314-.221l.163-.1h15.027l.16.086a1.211,1.211,0,0,1,.311.2.825.825,0,0,1,.129,1,1.992,1.992,0,0,1-.14.224l-.976,1.376q-2.115,2.982-4.236,5.961a1.829,1.829,0,0,0-.358,1.12c.007,1.182.005,2.364.005,3.545v1.184a.861.861,0,0,1-.649.946l-2.878,1.1A1.138,1.138,0,0,1,292.094,108.742Zm-4.065-14.07q1.908,2.691,3.822,5.377a3.021,3.021,0,0,1,.588,1.831c-.009,1.335-.007,2.671-.006,4.006v1.508s1.792-.684,2.366-.9l.028-2.073q0-1.276,0-2.554a2.953,2.953,0,0,1,.569-1.789q1.9-2.658,3.784-5.324l1.158-1.632H286.929Z"
      transform="translate(-285.418 -91.91)"
      fill="#7e8096"
    />
  </svg>
);
export const SvgSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 30.921 30.807">
    <path
      id="Path_1095"
      data-name="Path 1095"
      d="M2736.929,620.224l-6.214-6.215a13.386,13.386,0,1,0-2.682,2.715l6.2,6.2a1.907,1.907,0,0,0,2.7,0h0A1.908,1.908,0,0,0,2736.929,620.224Zm-16.979-4.236a9.93,9.93,0,1,1,9.93-9.93A9.93,9.93,0,0,1,2719.95,615.988Z"
      transform="translate(-2706.567 -592.675)"
      fill="currentColor"
    />
  </svg>
);
export const SvgMinus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 3.436">
    <path
      id="Path_316"
      data-name="Path 316"
      d="M849.008,713.3H833.444a1.718,1.718,0,0,1-1.718-1.718h0a1.718,1.718,0,0,1,1.718-1.718h15.564a1.718,1.718,0,0,1,1.718,1.718h0A1.718,1.718,0,0,1,849.008,713.3Z"
      transform="translate(-831.726 -709.867)"
      fill="#4cbec5"
    />
  </svg>
);
export const SvgPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 19.011">
    <path
      id="Path_313"
      data-name="Path 313"
      d="M849.087,956.556h-6.2v-6.231a1.639,1.639,0,0,0-1.639-1.64h-.041a1.639,1.639,0,0,0-1.639,1.64v6.231h-6.2a1.638,1.638,0,0,0-1.639,1.639h0a1.639,1.639,0,0,0,1.639,1.639h6.2v6.223a1.639,1.639,0,0,0,1.639,1.639h.041a1.639,1.639,0,0,0,1.639-1.639v-6.223h6.2a1.639,1.639,0,0,0,1.639-1.639h0A1.639,1.639,0,0,0,849.087,956.556Z"
      transform="translate(-831.726 -948.685)"
      fill="#a0a2aa"
    />
  </svg>
);
export const SvgShowMore: FC<any> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19.833 11.379 " fill="currentColor">
    <path
      id="Path_320"
      data-name="Path 320"
      fill="currentColor"
      d="M746.942,2160.347a1.462,1.462,0,0,0,2.068,0l7.42-7.42,7.42,7.42a1.462,1.462,0,0,0,2.068-2.068l-8.454-8.455a1.462,1.462,0,0,0-2.068,0l-8.454,8.455A1.462,1.462,0,0,0,746.942,2160.347Z"
      transform="translate(-746.514 -2149.396)"
    />
  </svg>
);
export const SvgLessThan = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 17.214 29.963">
    <path
      id="Path_348"
      data-name="Path 348"
      d="M1571.8,2624.579l-12.486-12.485a2.565,2.565,0,0,1,0-3.628l12.486-12.486a2.33,2.33,0,0,1,3.294,0h0a2.33,2.33,0,0,1,0,3.295l-11.005,11.005,11,11a2.33,2.33,0,0,1,0,3.3h0A2.329,2.329,0,0,1,1571.8,2624.579Z"
      transform="translate(-1558.563 -2595.298)"
      fill="currentColor"
    />
  </svg>
);
export const SvgMoreThan = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 17.215 29.963">
    <g id="Group_179" data-name="Group 179" transform="translate(-2229.396 -2596.298)">
      <path
        id="Path_349"
        data-name="Path 349"
        d="M2233.373,2596.98l12.486,12.486a2.563,2.563,0,0,1,0,3.627l-12.486,12.486a2.33,2.33,0,0,1-3.3,0h0a2.33,2.33,0,0,1,0-3.3l11-11-11-11a2.33,2.33,0,0,1,0-3.295h0A2.332,2.332,0,0,1,2233.373,2596.98Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
export const SvgClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11.528 11.528">
    <path
      id="Path_183"
      data-name="Path 183"
      d="M780.039,1388.145l3.52-3.519a1.31,1.31,0,0,0,0-1.852l-.023-.023a1.309,1.309,0,0,0-1.852,0l-3.519,3.519-3.5-3.5a1.309,1.309,0,0,0-1.852,0h0a1.309,1.309,0,0,0,0,1.851l3.5,3.5-3.515,3.515a1.31,1.31,0,0,0,0,1.852l.023.023a1.31,1.31,0,0,0,1.852,0l3.515-3.515,3.5,3.5a1.309,1.309,0,0,0,1.851,0h0a1.309,1.309,0,0,0,0-1.852Z"
      transform="translate(-772.415 -1382.367)"
      fill="#7e8096"
    />
  </svg>
);
export const SvgPriceFilter: FC<any> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 31.194 21.197">
    <path
      id="Path_176"
      data-name="Path 176"
      d="M4235.051,2734.548a8.646,8.646,0,0,1-.85,1.2q-4.219,4.24-8.475,8.444a1.709,1.709,0,1,1-2.463-2.36q2.763-2.766,5.539-5.519c.107-.107.208-.219.378-.4h-23.4a1.743,1.743,0,0,1-1.849-1.206,1.706,1.706,0,0,1,1.509-2.207c.156-.011.313,0,.47,0h23.268c-.163-.172-.269-.289-.38-.4q-2.77-2.758-5.542-5.516a1.678,1.678,0,0,1-.477-1.759,1.614,1.614,0,0,1,1.29-1.175,1.7,1.7,0,0,1,1.626.54q3.1,3.092,6.21,6.177c.768.763,1.554,1.51,2.293,2.3a10.361,10.361,0,0,1,.85,1.2Z"
      transform="translate(-4203.856 -2723.608)"
      fill="#fff"
    />
  </svg>
);

