using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext dc;
        public ProductController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet("")]
        public IActionResult GetProducts()
        {
            var products = dc.Products.ToList();
            return Ok(products);
        }

    }
}