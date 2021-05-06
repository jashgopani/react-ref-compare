const compareRef = (o1, o2) => {
    console.log(o1, o2);
    if (o1 && o2) {
        o1 = o1.current ?? o1;
        o2 = o2.current ?? o2;
        return stringify(o1) === stringify(o2);
    }
    return o1 === o2;
}

export const stringify = (e) => {
    if (e) {
        e = e.current ?? e;
        return (String(e.tagName).toLowerCase() + '#' + e.id + '.' + e.className);
    }
    return null;
}

export default compareRef;