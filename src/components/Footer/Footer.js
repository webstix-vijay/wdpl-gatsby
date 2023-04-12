import React from "react"

export default function Footer() {
  return (
    <footer class="footer footer-center bottom-0 w-full p-4 bg-black text-gray-50 z-40">
      <div class="text-center">
        <p>
          © {new Date().getFullYear()} All Rights Reserved. - &nbsp;
          <a class="font-semibold" href="https://www.webstix.com">
            Webstix Design Private Limited.
          </a>
        </p>
      </div>
    </footer>
  )
}
