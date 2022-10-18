import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
  datasource: any[] = []
  list = [
    {
      date: '2022-10-18T19:08:28.417Z',
      name: 'Competitive Intelligence',
      entitiesNo: 0,
      details: 'Found Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, libero aliquam? Sunt error reprehenderit repudiandae laudantium non, praesentium quos quaerat, numquam corrupti perferendis, exercitationem nisi culpa veritatis necessitatibus ratione ea.',
      id: 0,
      isShowActionIcon: false

    },
    {
      date: '2022-10-19T19:08:28.417Z',
      name: 'My Vender',
      entitiesNo: 0,
      details: 'With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements',
      id: 1,
      isShowActionIcon: false

    },
    {
      date: '2022-10-20T19:08:28.417Z',
      name: 'My Customer',
      entitiesNo: 0,
      details: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.",
      id: 2,
      isShowActionIcon: false

    },
    {
      date: '2022-10-21T19:08:28.417Z',
      name: 'Test_30_result',
      entitiesNo: 28,
      details: 'While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.',
      id: 3,
      isShowActionIcon: true

    },
    {
      date: '2022-10-22T19:08:28.417Z',
      name: 'To_index',
      entitiesNo: 100,
      details: 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears',
      id: 4,
      isShowActionIcon: true

    },
    {
      date: '2022-10-23T19:08:28.417Z',
      name: 'KPMG Requested companies',
      entitiesNo: 230,
      details: 'This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create',
      id: 5,
      isShowActionIcon: true

    },
    {
      date: '2022-10-23T19:08:28.417Z',
      name: 'Two_companies',
      entitiesNo: 123,
      details: 'The third option is to have the random paragraph be the ending paragraph in a short story',
      id: 6,
      isShowActionIcon: true

    },
    {
      date: '2022-11-15T19:08:28.417Z',
      name: 'My Conpany',
      entitiesNo: 223,
      details: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers",
      id: 7,
      isShowActionIcon: true

    },
    {
      date: '2022-11-20T19:08:28.417Z',
      name: 'Mumbai',
      entitiesNo: 1123,
      details: 'The third option is to have the random paragraph be the ending paragraph in a short story',
      id: 8,
      isShowActionIcon: true

    },
    {
      date: '2022-11-21T19:08:28.417Z',
      name: 'Custome',
      entitiesNo: 223,
      details: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers",
      id: 9,
      isShowActionIcon: true

    },
    {
      date: '2022-11-15T19:08:28.417Z',
      name: 'My Conpany',
      entitiesNo: 223,
      details: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place",
      id: 10,
      isShowActionIcon: true

    },
    {
      date: '2022-11-20T19:08:28.417Z',
      name: 'Mumbai',
      entitiesNo: 1123,
      details: "Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.",
      id: 21,
      isShowActionIcon: true

    },
    {
      date: '2022-11-21T19:08:28.417Z',
      name: 'Custome',
      entitiesNo: 223,
      details: 'The third option is to have the random paragraph be the ending paragraph in a short story',
      id: 11,
      isShowActionIcon: true

    },
    {
      date: '2022-11-15T19:08:28.417Z',
      name: 'My Conpany',
      entitiesNo: 223,
      details: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers",
      id: 12,
      isShowActionIcon: true

    },
    {
      date: '2022-11-20T19:08:28.417Z',
      name: 'Mumbai',
      entitiesNo: 1123,
      details: "Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.",
      id:20,
      isShowActionIcon: true

    },
    {
      date: '2022-11-21T19:08:28.417Z',
      name: 'Custome',
      entitiesNo: 223,
      details: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place",
      id: 13,
      isShowActionIcon: true

    },
    {
      date: '2022-11-15T19:08:28.417Z',
      name: 'My Conpany',
      entitiesNo: 223,
      details: 'The third option is to have the random paragraph be the ending paragraph in a short story',
      id: 14,
      isShowActionIcon: true

    },
    {
      date: '2022-11-20T19:08:28.417Z',
      name: 'Mumbai',
      entitiesNo: 1123,
      details: "Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.",
      id: 15,
      isShowActionIcon: true

    },
    {
      date: '2022-11-21T19:08:28.417Z',
      name: 'Custome',
      entitiesNo: 223,
      details: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place",
      id: 16,
      isShowActionIcon: true

    },
    {
      date: '2022-11-15T19:08:28.417Z',
      name: 'My Conpany',
      entitiesNo: 223,
      details: 'The third option is to have the random paragraph be the ending paragraph in a short story',
      id: 17,
      isShowActionIcon: true

    },
    {
      date: '2022-11-20T19:08:28.417Z',
      name: 'Mumbai',
      entitiesNo: 1123,
      details: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers",
      id: 18,
      isShowActionIcon: true

    },
    {
      date: '2022-11-21T19:08:28.417Z',
      name: 'Custome',
      entitiesNo: 223,
      details: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place",
      id: 19,
      isShowActionIcon: true

    },

  ]

  @Input() searchValue: string = '';
  @Output() details = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.datasource = this.list;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchValue'].currentValue !== changes['searchValue'].previousValue) {
      this.datasource = this.list.filter(f => f.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    if (!this.datasource.length) {
      this.details.emit({})
    }

    if (this.searchValue === '') {
      this.datasource = this.list;
    }
  }

  showDetails(rowdata: any) {
    this.details.emit(rowdata)
  }

}
