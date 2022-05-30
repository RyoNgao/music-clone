import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className="text-white flex justify-start items-center ml-8 my-5 cursor-pointer">
        <div className="text-5xl">
          <svg width="1em" height="1em" viewBox="0 0 512.000000 512.000000">
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path
                d="M2360 4994 c-216 -25 -444 -69 -532 -103 l-28 -11 0 -665 0 -665 59
                40 c80 55 250 134 341 160 367 102 739 42 1056 -170 101 -68 256 -223 324
                -324 251 -375 289 -837 101 -1232 -128 -268 -321 -464 -586 -594 -132 -65
                -221 -93 -365 -115 -304 -47 -618 26 -886 205 -101 68 -256 223 -324 324 -67
                100 -143 259 -170 356 -49 178 -50 190 -50 1359 0 961 -2 1092 -15 1087 -26
                -10 -189 -122 -265 -183 -418 -333 -721 -810 -851 -1337 -50 -206 -63 -327
                -63 -576 0 -243 12 -359 61 -565 192 -818 793 -1478 1595 -1754 624 -214 1332
                -160 1918 146 1303 680 1720 2351 888 3560 -388 563 -983 934 -1668 1038 -100
                15 -464 28 -540 19z"
              />
              <path
                d="M2400 3284 c-297 -64 -524 -292 -584 -586 -80 -391 170 -781 564
                  -879 71 -18 269 -18 340 0 232 57 433 229 523 447 40 96 52 162 52 284 0 165
                  -33 277 -120 410 -167 255 -484 387 -775 324z"
              />
            </g>
          </svg>
        </div>
        <div className="text-2xl font-extrabold ml-2">Music</div>
      </div>
    </Link>
  );
}
