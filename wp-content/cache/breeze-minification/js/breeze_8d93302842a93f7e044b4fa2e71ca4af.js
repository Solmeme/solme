/*! Created by Cloudways 
 On 14-02-2024 */
var timer, ready = e => {
    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
};

function search_for_banned_links(e, t) {
    var r = !1;
    if (e.length)
        for (i = 0; i < e.length; i++) - 1 === t.indexOf(e[i]) && -1 === e[i].indexOf(t) || (r = !0);
    return r
}

function breeze_ignore_special_links(e, t) {
    var r = !0;
    return -1 !== t.indexOf("add-to-cart=") && (r = !1), r = void 0 !== e.dataset.product_id && void 0 !== e.dataset.quantity && void 0 !== e.dataset.product_sku ? !1 : r
}
ready(() => {
    var a = [];
    addEventListener("mouseover", function(r) {
        var n, i;
        r.target instanceof HTMLAnchorElement && (n = new URL(breeze_prefetch.local_url).host, -1 === (i = r.target.attributes.href.value).indexOf(n) && (i = r.target.href), timer = setTimeout(function() {
            var e, t;
            "#" !== i && (e = i.replace(breeze_prefetch.local_url, ""), t = new URL(i).host, "" !== i.trim()) && !1 === a.includes(i) && n === t && !1 === search_for_banned_links(breeze_prefetch.ignore_list, e) && !0 === breeze_ignore_special_links(r.target, i) && (a.push(i.trim()), (t = document.createElement("link")).href = i, t.rel = "prefetch", document.head.appendChild(t))
        }, 150))
    }), addEventListener("mouseout", function(e) {
        clearTimeout(timer)
    })
});