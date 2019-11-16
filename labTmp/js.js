let dom = {
    createElement: function (tagName, className, cssProps, append) {
        let element = document.createElement(tagName);
        if (element != null) {
            if (this._isValidValue(className)) {
                element.className = className;
            }

            for (let f in cssProps) {
                if (this._isValidAttr(f)) {
                    element[f] = cssProps[f];
                }
                else {
                    element.style[f] = cssProps[f];
                }
            }
        }
        append.appendChild(element);
        return element;
    },
    _isValidValue: function (val) {
        return (typeof (val) !== "undefined" && val)
    },
    _isValidAttr: function (attr) {
        return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
    }
}

//header
let header = dom.createElement("header", "container-fluid", null, document.body);
let h_row = dom.createElement("div", "row flex", null, header);
let h_h1 = dom.createElement("h1", null, { innerText: "My Website" }, h_row);
let h_row1 = dom.createElement("div", "row flex", null, header);
let h_h12 = dom.createElement("p", null, { innerText: "A responsive website created by me." }, h_row1);

//head-links
l_container = dom.createElement("div", "container-fluid", null, document.body);
l_row = dom.createElement("div", "row flex", null, l_container);
l_col = dom.createElement("div", "col-md-1 col-md-1l", null, l_row);
l_a = dom.createElement("a", null, { href: "/", innerText: "Link" }, l_col);

l_col10 = dom.createElement("div", "col-md-10", null, l_row);
l_a1 = dom.createElement("a", null, { href: "/", innerText: "Link" }, l_col10);
l_a2 = dom.createElement("a", "a-p", { href: "/", innerText: "Link" }, l_col10);

l_col11 = dom.createElement("div", "col-md-1 col-md-1r", null, l_row);
l_a3 = dom.createElement("a", null, { href: "/", innerText: "Link" }, l_col11);

//main-left
main_cont = dom.createElement("div", "container-fluid", null, document.body);
main_row = dom.createElement("div", "row", null, main_cont);
main_col4 = dom.createElement("div", "col-md-4 main-left", null, main_row);
main_h2 = dom.createElement("h2", "about-me", { innerText: "About Me" }, main_col4);
main_p = dom.createElement("p", null, { innerText: "Photo of me:" }, main_col4);
main_ava = dom.createElement("img", null, { src: "img/photo-1.jpg" }, main_col4);
main_p1 = dom.createElement("p", null, { innerText: "Some text about me in culpa qui officia deserunt mollit anim.." }, main_col4);
main_h3 = dom.createElement("h3", null, { innerText: "More Text" }, main_col4);
main_p2 = dom.createElement("p", null, { innerText: "Lorem ipsum dolor sit ame." }, main_col4);
main_div1 = dom.createElement("div", "img-3 img1", null, main_col4);
main_div2 = dom.createElement("div", "img-3 img2", null, main_col4);
main_div3 = dom.createElement("div", "img-3 img3", null, main_col4);

//main-right
main_col8 = dom.createElement("div", "col-md-8", null, main_row);
for (let i=0;i<2;i++){
    main_h2r = dom.createElement("h2", "about-me", { innerText: "Title Heading" }, main_col8);
    main_pr = dom.createElement("p", null, { innerText: "Title description, Dec 7, 2017:" }, main_col8);
    main_img_r = dom.createElement("img", null, { src: "img/photo-21.jpg" }, main_col8);
    main_p1r = dom.createElement("p", null, { innerText: "Some text.." }, main_col8);
    main_p2r = dom.createElement("p", null, {
        innerText: `"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
    exercitation ullamco."`},main_col8);
}

//footer
let footer = dom.createElement("footer",null,null,document.body);
let h3_f = dom.createElement("h3",null,{innerText:"FOOTER"},footer);