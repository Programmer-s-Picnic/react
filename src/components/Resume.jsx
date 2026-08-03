import React from "react";

export default function Resume({ name, image, address }) {
  return (
    <>
      <center>
        <table>
          <tr>
            <td colSpan="4">Resume</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{name}</td>
            <td>Address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td colSpan="4">
              <img src={image} />
            </td>
          </tr>
        </table>
      </center>
    </>
  );
}
