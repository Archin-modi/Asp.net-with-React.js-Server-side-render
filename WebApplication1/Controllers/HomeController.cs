using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<Author> AuthorList = new List<Author>();
            AuthorList.Add(new Author("Mahesh Chand", 35, "A Prorammer's Guide to ADO.NET", true, new DateTime(2003, 7, 10)));
            AuthorList.Add(new Author("Neel Beniwal", 18, "Graphics Development with C#", false, new DateTime(2010, 2, 22)));
            AuthorList.Add(new Author("Praveen Kumar", 28, "Mastering WCF", true, new DateTime(2012, 01, 01)));
            AuthorList.Add(new Author("Mahesh Chand", 35, "Graphics Programming with GDI+", true, new DateTime(2008, 01, 20)));
            AuthorList.Add(new Author("Raj Kumar", 30, "Building Creative Systems", false, new DateTime(2011, 6, 3)));
            ViewBag.Blog = AuthorList;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}

public class Author
{
    private string name;
    private short age;
    private string title;
    private bool mvp;
    private DateTime pubdate;

    public Author(string name, short age, string title, bool mvp, DateTime pubdate)
    {
        this.name = name;
        this.age = age;
        this.title = title;
        this.mvp = mvp;
        this.pubdate = pubdate;
    }

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public short Age
    {
        get { return age; }
        set { age = value; }
    }
    public string BookTitle
    {
        get { return title; }
        set { title = value; }
    }
    public bool IsMVP
    {
        get { return mvp; }
        set { mvp = value; }
    }
    public DateTime PublishedDate
    {
        get { return pubdate; }
        set { pubdate = value; }
    }
}