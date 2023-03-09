import React from "react"

export default function Footer() {
  return (
    <footer class="footer footer-center fixed bottom-0 w-full p-4 bg-black text-gray-50">
      <div class="text-center">
        <p>
          Copyright © {new Date().getFullYear()} - &nbsp;
          <a class="font-semibold" href="https://www.webstix.com">
            Webstix
          </a>
        </p>
      </div>
    </footer>
  )
}
