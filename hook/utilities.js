import { useState,useEffect } from "react";
import axios from "axios";


const utilities = () => {

    const BearerKey="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0ODY2NjI5OSwiaWF0IjoxNzQ4MDYxNDk5fQ.Mn1ltEnyv6tupoeL4Zs0-3jtKUA-zejBbd6ZvlQQZwY";
    const ipAdresse="localhost";

    return {BearerKey,ipAdresse};
}
export default utilities
// npx expo start --dev-client=false
