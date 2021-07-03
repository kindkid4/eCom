using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class OrderController : BaseController
    {
        private readonly IUnitOfWork uow;

        public OrderController(IUnitOfWork uow)
        {
            this.uow = uow;
        }
        //GET/api/order/retrive/"nume"
        [HttpGet("retrive/{userName}")]
        public async Task<IActionResult> GetOrders(string userName)
        {
            var user = await uow.UserRepository.GetUser(userName);

            var orders = await uow.orderRepository.GetOrdersAsync(user.Id);
            if (orders == null || user == null)
            {
                return BadRequest("Nu exista comenzi pe acest utilizator");
            }
            return Ok(orders);
        }

        [HttpPost("add/{userName}/{qty}")]
        public async Task<IActionResult> addOrder(string userName,int qty, ProductDto product)
        {
            var user = await uow.UserRepository.GetUser(userName);
            Order ord = new Order();
            uow.orderRepository.removeFromStock(product.Id,qty);
            ord.BoughtOn = DateTime.Now.ToString("MM/dd/yyyy");
            ord.OrderdBy = user.Id;
            ord.OrderPrice = product.Price*qty;
            ord.ProductId = product.Id;
            uow.orderRepository.AddOrder(ord);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        [HttpDelete("remove/{id}")]
        public async Task<IActionResult> removeOrder(int id)
        {
            uow.orderRepository.DeleteOrder(id);

            await uow.SaveAsync();
            return StatusCode(200);
        }
    }
}