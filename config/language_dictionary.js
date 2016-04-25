const dictionary = {
    javascript: 'JavaScript',
    html: 'html',
    clojure: 'Clojure'
};

export default function getLanguageName(key) {
    return dictionary[name] || key;
}