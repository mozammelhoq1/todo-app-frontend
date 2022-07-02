import React from "react";
import { Routes, Route, Link } from "react-router-dom";
const NavigationBar = () => {
  const routes = (
    <>
      <li>
        <Link className="btn btn-ghost normal-case font-bold text-base" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link
          className="btn btn-ghost normal-case font-bold text-base"
          to="/tasks"
        >
          To-Do
        </Link>
      </li>
      <li>
        <Link
          className="btn btn-ghost normal-case font-bold text-base"
          to="/completed"
        >
          Completed
        </Link>
      </li>
      <li>
        <Link
          className="btn btn-ghost normal-case font-bold text-base"
          to="/calender"
        >
          Calender
        </Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-neutral text-neutral-content drop-shadow-lg px-10 sticky top-0">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-3 drop-shadow-lg bg-neutral rounded-box"
          >
            {routes}
          </ul>
        </div>

        <p class=" font-bold text-2xl">Clickology</p>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{routes}</ul>
      </div>
    </div>
  );
};

export default NavigationBar;
