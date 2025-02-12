import { useState,useEffect } from "react";
import axios from "axios";


const utilities = () => {

    const BearerKey="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczOTQwMjI2MiwiaWF0IjoxNzM5MzY2MjYyfQ.9seOL8iYxoqyynAma73wymAbqo26NE8ra_FuCYD5KMw";
    const ipAdresse="localhost";

    return {BearerKey,ipAdresse};
}
export default utilities
