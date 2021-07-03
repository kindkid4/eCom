using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetOrdersAsync(int userId);

        void AddOrder(Order order);

        void DeleteOrder(int id);
        void removeFromStock(int id,int qty);
    }
}