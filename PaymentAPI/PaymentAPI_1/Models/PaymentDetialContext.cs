using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    public class PaymentDetialContext : DbContext
    {
        public PaymentDetialContext(DbContextOptions<PaymentDetialContext> options) : base(options)
        {

        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
