import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Book from "@/views/Book.vue";
import { emptyBookMock } from "@/models/mocks/Book/Empty";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Book.vue", () => {
  it("Show error message when errorMessage property is set.", () => {
    const errorMessage = "There was an error getting the books.";
    const wrapper = shallowMount(Book, {
      localVue,
      router,
      stubs: ['router-link', 'router-view'],
      data: function() {
        return {
          errorMessage,
        };
      },
    });
    expect(wrapper.find(".alert.alert-danger").exists()).toBeTruthy();
  });

  it("Render correct style when book is upvoted", () => {
    const upvoted = true;
    let book = emptyBookMock;
    book.title = "Simple title";
    book.upvoted = upvoted;
    const wrapper = shallowMount(Book, {
      localVue,
      router,
      stubs: ['router-link', 'router-view'],
      data: function() {
        return {
          book
        }
      }
    });
    expect(wrapper.find(".btn.btn-outline-primary").exists()).toBeTruthy();
  });

  it("Render correct style when book is not upvoted", () => {
    const upvoted = false;
    let book = emptyBookMock;
    book.title = "Simple title";
    book.upvoted = upvoted;
    const wrapper = shallowMount(Book, {
      localVue,
      router,
      stubs: ['router-link', 'router-view'],
      data: function() {
        return {
          book
        }
      }
    });
    expect(wrapper.find(".btn.btn-primary").exists()).toBeTruthy();
  });


  it("Render correct book title", () => {
    const upvoted = false;
    let book = emptyBookMock;
    book.title = "Simple title";
    book.upvoted = upvoted;
    const wrapper = shallowMount(Book, {
      localVue,
      router,
      stubs: ['router-link', 'router-view'],
      data: function() {
        return {
          book
        }
      }
    });
    expect(wrapper.find(".title").text()).toMatch(book.title);
  });

});
