
getHTML.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onload = () => {
        const html = request.response
        let div = document.createElement('div')
        div.innerHTML = html
        document.body.appendChild(div)
    }
    request.send()
}

getCSS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onload = () => {
        const css = request.response
        let style = document.createElement('style')
        style.innerHTML = css
        document.head.appendChild(style)
    }
    request.send()
}
getJS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/2.js")
    request.onload = () => {
        const js = request.response
        let script = document.createElement('script')
        script.innerHTML = js
        document.body.appendChild(script)
    }
    request.send()
}
getXML.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const xml = request.responseXML
            const text = xml.getElementsByTagName("span")[0].textContent
            console.log(text)
        }

    }
    request.send()
}

getJSON.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const json = JSON.parse(request.response)
            console.log(json)

        }
    }
    request.send()
}
let n = 2
getNext.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/page" + n)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let array = JSON.parse(request.response)
            let ul = document.querySelector("#list-ul")
            console.log(array)
            array.forEach(element => {
                let li = document.createElement("li")
                li.innerHTML = element.id
                ul.appendChild(li)
            });
            if (n < 3) {
                n += 1
            }
        }
    }
    request.send()
}