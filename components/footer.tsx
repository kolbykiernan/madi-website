import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            Madison Hearne, LCSW, #127093 | Therapy for Children, Teens, and Families
        </small>
        <div className="text-xs flex justify-center gap-4">
          {/* <Link className="font-semibold" href="/hipaanotification">HIPAA Notification</Link> */}
          <div>
            <span>Website by:</span> {""}
            <a className="font-semibold" href="https://github.com/kolbykiernan">Kolby Kiernan</a>
          </div>
        </div>
    </footer>
  )
}
