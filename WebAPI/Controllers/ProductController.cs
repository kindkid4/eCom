using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

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
        //GET api/product
        [HttpGet("")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await dc.Products.ToListAsync();
            return Ok(products);
        }

        //POST api/product
        [HttpPost("post")]
        public async Task<IActionResult> AddProduct(Product product)
        {
            await dc.Products.AddAsync(product);
            await dc.SaveChangesAsync();
            return Ok(product);
        }
        //DELETE api/product
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {   
            var product = await dc.Products.FindAsync(id);
            dc.Products.Remove(product);
            await dc.SaveChangesAsync();
            return Ok(product);
        }

    }
}