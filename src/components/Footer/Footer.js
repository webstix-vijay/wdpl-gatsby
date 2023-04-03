import React from "react"

export default function Footer() {
  return (
    <footer class="footer footer-center bottom-0 w-full p-4 bg-black text-gray-50">
      <div class="text-center">
        <p>
          © {new Date().getFullYear()} All Rights Reserved. - &nbsp;
          <a class="font-semibold" href="https://www.webstix.com">
            Webstix Design Private Ltd.
          </a>
        </p>
      </div>
    </footer>
  )
}
