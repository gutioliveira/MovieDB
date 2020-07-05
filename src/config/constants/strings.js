import I18n from 'react-native-i18n';

console.log('I18n.currentLocale()', I18n.currentLocale());

I18n.fallbacks = true;

I18n.translations = {
    en: {
        genresLabel: 'Genres',
        searchStringPlaceHolder: 'Search by title...',
        originalTitleLabel: "Original Title",
        descriptionLabel: "Description",
        trending: 'Trending'
    },
    pt: {
        genresLabel: 'Gêneros',
        searchStringPlaceHolder: 'Pesquise por título...',
        originalTitleLabel: "Título Original",
        descriptionLabel: "Descrição",
        trending: 'Em breve'
    },
};

export default (key) => {
    return I18n.t(key);
};
