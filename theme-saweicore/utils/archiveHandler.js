import {sectionRE} from './index'

//
export function getArchives(pages) {
  const _map = filterArchives(pages);

  return {
    map: _map,
    list: Object.values(_map)
  }
}

// get archive page from pages.
export function filterArchives(pages) {
  return pages.reduce((obj, page, index) => {
    if(page.pid == 'archive'){
      const { frontmatter: { archive } } = page;
      if (archive && archive.id) {
          page.chapters = filterArchiveChapter(archive, pages);
          obj[archive.id] = page; // add to map
      }
    }
    return obj;
  }, {});
}

export function filterArchiveChapter(archive_page, pages) {
  return pages.reduce((obj, page) => {

    if (page.pid === 'archive')
      return obj;

    // get page's frontmatter
    const { frontmatter: { archive } } = page;
    if (!archive || archive.id != archive_page.id)
      return obj;


    const { chapter, section } = getArchiveIndexByPage(archive);
    // initialize chapter struct.
    if (!(chapter in obj))
      obj[chapter] = {
        // get archive chapter name.
        title: archive_page.chapters &&
                chapter in archive_page.chapters ?
                archive_page.chapters[chapter]: chapter,
        sections: { list:[], map: {} }
      };


    const chapter_obj = obj[chapter];
    const sections_obj = chapter_obj.sections
    const page_obj =  {
      index: section,
      page: page,
      title: archive.title || page.title
    };
    // write page info.
    sections_obj.map[page.key] = page_obj;
    sections_obj.list.push(page_obj);

    return obj
  }, {})
}

export function getArchiveIndexByPage(archive_meta) {
  let chapter, section;

  if ( archive_meta.section &&
       sectionRE.test(archive_meta.section) ) {
    [ chapter, section ] = archive_meta.section.split('-');
  }

  return {
    chapter: parseInt(chapter) || 0,
    section: parseInt(section) || 0
  }

}
