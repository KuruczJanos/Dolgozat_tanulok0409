// File: tanulokservice.js
// Author: Kurucz János
// Copyright: 2024, Kurucz János
// Group: Szoft II/1/E
// Date: 2024-04-05
// Github: https://github.com/KuruczJanos/Dolgozat_tanulok0409.git

const host = 'http://localhost:8000/';
const endpoint = 'tanulok';

export async function lekerTanulok(){
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}